import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from '@/pages'
import { CheckEmailPage } from '@/pages/auth/checkEmail'
import { Profile } from '@/pages/auth/profile'
import { RecoverPasswordPage } from '@/pages/auth/recoverPassword'
import { SignInPage } from '@/pages/auth/signIn'
import { SignUpPage } from '@/pages/auth/signUp'
import { Deck } from '@/pages/deck/deck'
import { Error404Page } from '@/pages/error404'
import { Layout, useAuthContext } from '@/pages/layout'

export const ROUTES = {
  base: '/',
  checkEmail: '/check-email',
  createNewPassword: '/create-new-password',
  deck: '/decks/:deckId',
  decks: '/',
  error: '/*',
  login: '/login',
  profile: '/profile',
  recoverPassword: '/recover-password',
  signUp: '/sign-up',
} as const

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.login,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.signUp,
  },
  {
    element: <RecoverPasswordPage />,
    path: ROUTES.recoverPassword,
  },
  {
    element: <CheckEmailPage />,
    path: ROUTES.checkEmail,
  },
  {
    element: <Error404Page />,
    path: ROUTES.error,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: ROUTES.decks,
  },
  { element: <Deck />, path: ROUTES.deck },
  { element: <Profile />, path: ROUTES.profile },
]

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        children: publicRoutes,
        element: <PublicRoutes />,
      },
    ],
    element: <Layout />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />
}

function PublicRoutes() {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? <Navigate to={ROUTES.base} /> : <Outlet />
}
