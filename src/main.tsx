// 时间设为中文
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import ReactDOM from 'react-dom/client'

import './global.scss'
import Router from './router'

dayjs.locale('zh-cn')
ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Router />
  </>,
)
