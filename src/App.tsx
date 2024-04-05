import { Outlet } from 'react-router-dom'

// eslint-disable-next-line import/no-unresolved
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
