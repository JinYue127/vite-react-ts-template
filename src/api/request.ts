import { message } from 'antd'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import { TOKEN } from '@/utils/config.ts'
import { getLocalInfo, removeLocalInfo } from '@/utils/local.ts'

import loading from '@/assets/gif/newLoading.gif'

let requestCount = 0
// 生成环境所用的接口
const prefixUrl = import.meta.env.VITE_BASE_URL as string

const baseURL = process.env.NODE_ENV !== 'development' ? prefixUrl : '/api'

const showLoading = () => {
  const dom = document.createElement('div')
  dom.setAttribute('id', '__loading')
  document.body.appendChild(dom)
  const img = document.createElement('img')
  img.setAttribute('id', '__loading-img')
  img.setAttribute('src', loading)
  dom.appendChild(img)
}

const removeLoading = () => {
  const dom = document.getElementById('__loading')
  if (dom) {
    document.body.removeChild(dom as HTMLElement)
  }
}

// 创建新的axios实例
const service = axios.create({
  // 公共接口
  baseURL: baseURL,
  // 超时时间 单位是ms，这里设置了5s的超时时间
  timeout: 5000,
})

// 添加一个请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 设置loading
    if (!requestCount && config.url) {
      showLoading()
    }
    requestCount++

    const token = getLocalInfo(TOKEN) || ''

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => {
    message.error('请求错误，请稍后再试')
    return Promise.reject(error)
  },
)

// 添加一个响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.config.url) {
      requestCount--
    }

    if (requestCount === 0) {
      removeLoading()
    }

    const { status, data } = response

    if (status === 200) {
      if (data.code === 200) {
        // 接口请求结果正确
        return data
      }
      // 权限不足
      if (data?.code === 401) {
        message.error('权限不足，请重新登录！')
        removeLocalInfo(TOKEN)
        setTimeout(() => {
          window.location.href = '/'
        }, 1000)
        handleError(data?.message)
      }
      return Promise.reject(data)
    }
  },
  (error: AxiosError) => {
    // 提示错误信息
    handleError('网络异常')
    requestCount = 0
    removeLoading()
    return Promise.reject(error)
  },
)

const handleError = (error: string, content?: string) => {
  console.error('错误信息:', error)
  message.error({
    content: content || error || '服务器错误',
    key: 'error',
  })
}
export default service
