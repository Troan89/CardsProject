import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header/header'

export const CardsProject = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
