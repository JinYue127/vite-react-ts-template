import { Route, Routes, useLocation } from 'react-router-dom'

import routerMap from './routerMap'

import Layout from '@/pages/base/Layout'
import Error404 from '@/pages/base/NotFound'

const FrontendAuth = () => {
  const { pathname } = useLocation()
  const targetRouterConfig = routerMap.find((item) => item.path === pathname)

  if (targetRouterConfig) {
    if (pathname === '/') {
      return (
        <Routes>
          <Route index element={targetRouterConfig.component} />
        </Routes>
      )
    } else {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={pathname} element={targetRouterConfig.component} />
          </Route>
        </Routes>
      )
    }
  }
  // 如果路由不合法，重定向到 404 页面
  return (
    <Routes>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
export default FrontendAuth
