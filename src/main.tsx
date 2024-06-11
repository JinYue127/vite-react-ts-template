import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

import './global.scss'
import FrontendAuth from '@/router/FrontendAuth.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <FrontendAuth />
    </BrowserRouter>
  </React.StrictMode>,
)
