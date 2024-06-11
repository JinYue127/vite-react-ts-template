import { useEffect } from 'react'

import { testApi } from '@/api/test'

const HomePage = () => {
  useEffect(() => {
    testApi()
  }, [])
  return <div>homePage</div>
}
export default HomePage
