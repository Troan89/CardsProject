import { Outlet } from 'react-router-dom'

import { Toast } from './components/ui/toast'

export function App() {
  return (
    <div>
      <Outlet />
      <Toast />
    </div>
  )
}
