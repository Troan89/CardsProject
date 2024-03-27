import { createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header/header'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth'

import s from './layout.module.scss'

type AuthContextType = {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider')
  }

  return context
}

const AuthContextProvider = ({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode
  isAuthenticated: boolean
}) => {
  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()

  const isAuthenticated = !isError && !isLoading

  if (isLoading) {
    return <div>loading...</div>
  }

  return (
    <AuthContextProvider isAuthenticated={isAuthenticated}>
      <Header
        avatar={data?.avatar}
        email={data?.email}
        isLoggedIn={isAuthenticated}
        logout={logout}
        userName={data?.name}
      />
      <main className={s.main}>{isLoading ? <div>loading...</div> : <Outlet />}</main>
    </AuthContextProvider>
  )
}
