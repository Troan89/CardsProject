import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header/header'

export function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
