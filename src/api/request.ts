import { message } from 'antd'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

import loading from '@/assets/gif/newLoading.gif'

let requestCount = 0

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
  baseURL: import.meta.env.VITE_BASE_URL,
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

    const token = '' // todo

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
      if (data.code === 0) {
        // 接口请求结果正确
        return data
      } else {
        return Promise.reject(data)
      }
    }
  },
  (error: AxiosError) => {
    // 提示错误信息
    message.error({ content: '网络异常' })
    requestCount = 0
    removeLoading()
    return Promise.reject(error)
  },
)

export default service
