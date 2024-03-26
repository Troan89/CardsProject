import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header/header'

import { Toast } from './components/ui/toast'

export function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Toast />
    </div>
  )
}
