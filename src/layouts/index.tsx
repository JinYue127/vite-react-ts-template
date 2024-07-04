import { useOutlet } from 'react-router-dom'

// todo
function Layout() {
  const outlet = useOutlet()
  return (
    <div id="layout">
      <div id="layoutContent">{outlet}</div>
    </div>
  )
}

export default Layout
