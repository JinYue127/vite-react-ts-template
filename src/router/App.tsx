import { RouteObject, useRoutes } from 'react-router-dom'

import { handleRoutes } from './utils/helper.tsx'

import type { DefaultComponent } from '@loadable/component'

import Layout from '@/layouts'
import NotFound from '@/pages/404'
import Login from '@/pages/login'

type PageFiles = Record<string, () => Promise<DefaultComponent<unknown>>>

const pages = import.meta.glob('../pages/**/*.tsx') as PageFiles

const layouts = handleRoutes(pages)

const newRoutes: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: '',
    element: <Layout />,
    children: layouts,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

function App() {
  return <>{useRoutes(newRoutes)}</>
}

export default App
