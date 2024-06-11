import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'

const routeList = [
  { path: '/', name: 'home', component: <HomePage /> },
  { path: '/about', name: 'about', component: <AboutPage /> },
]

export default routeList
