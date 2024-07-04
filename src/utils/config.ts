/**
 * @description 配置项
 */
export const TOKEN = 'token' // token名称
export const EMPTY_VALUE = '-' // 空值显示

// 公共组件默认值
export const MAX_TAG_COUNT = 'responsive' // 最多显示多少个标签，responsive：自适应
export const FORM_REQUIRED = [{ required: true }] // 表单必填校验

// 日期格式化
export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'YYYY-MM-DD hh:mm:ss'

// 初始化分页数据
export const INIT_PAGINATION = {
  page: 1,
  pageSize: 10,
}

// 环境判断
const ENV = import.meta.env.VITE_ENV as string

// 生成环境所用的接口
const URL = import.meta.env.VITE_BASE_URL as string
// 上传地址
export const FILE_API = `${ENV === 'development' ? '/api' : URL}/test/file/upload-file`
