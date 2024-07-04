/**
 * 用于处理 query 入参
 * @param url
 * @param params
 */
export const formatUrl = (url: string, params: { [propsName: string]: any }) => {
  if (!params) {
    return url
  }
  if (Object.keys(params).length === 0) {
    return url
  }
  return (
    url +
    '?' +
    Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join('&')
  )
}
