import { Outlet } from 'react-router-dom'

import s from './app.module.scss'

import { Toast } from './components/ui/toast'

export function App() {
  return (
    <div className={s.app}>
      <Outlet />
      <Toast />
    </div>
  )
}
