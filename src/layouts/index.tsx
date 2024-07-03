import { useOutlet } from 'react-router-dom'

// todo
function Layout() {
  const outlet = useOutlet()
  console.log(outlet, 'outlet')
  return (
    <div id="layout">
      <div className="text-red-500">22226777</div>
      <div id="layoutContent">{outlet}</div>
    </div>
  )
}

export default Layout
