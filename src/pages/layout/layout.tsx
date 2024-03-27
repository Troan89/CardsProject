import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header/header'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth'

import s from './layout.module.scss'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const isAuth = !isError && !isLoading

  return (
    <>
      <Header
        avatar={data?.avatar}
        email={data?.email}
        isLoggedIn={isAuth}
        logout={logout}
        userName={data?.name}
      />
      <main className={s.main}>
        {isLoading ? <div> loading... </div> : <Outlet context={isAuth} />}
      </main>
    </>
  )
}
