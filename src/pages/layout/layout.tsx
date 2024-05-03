import React, { createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Header } from '@/components/ui/header/header'
import { Spinner } from '@/components/ui/spinner/spinner'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth'

import s from './layout.module.scss'

type AuthContextType = {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext)

  if (!context) {
    toast.error('Oops! Something went wrong!')
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
  const { data, isError, isFetching, isLoading } = useGetMeQuery()
  const [logout] = useLogoutMutation()

  const isAuthenticated = !isError && !isLoading

  return (
    <AuthContextProvider isAuthenticated={isAuthenticated}>
      <Header
        avatar={data?.avatar}
        email={data?.email}
        isLoggedIn={isAuthenticated}
        logout={logout}
        userName={data?.name}
      />
      <main className={s.main}>
        {isLoading || isFetching ? <Spinner className={s.spinner} /> : <Outlet />}
      </main>
    </AuthContextProvider>
  )
}
