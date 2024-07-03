import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { App } from 'antd'

import StaticAntd from '@/utils/staticAntd.ts'

import AppPage from './App'

const Page = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App>
          <StaticAntd />
          <AppPage />
        </App>
      </BrowserRouter>
    </React.StrictMode>
  )
}
export default Page
