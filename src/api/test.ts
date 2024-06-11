// api接口 - 此处用了统一保存接口url路径
import http from './http.ts'

const api = {
  test: '/auth/test', // 测试接口
}

export function testApi() {
  return http.get<{ token: string }>(api.test)
}
