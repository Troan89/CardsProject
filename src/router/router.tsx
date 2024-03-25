import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

export const ROUTES = {
  base: '/',
  checkEmail: '/check-email',
  createNewPassword: '/create-new-password',
  error: '/*',
  login: '/login',
  newPassword: '/create-password',
  profile: '/profile',
  recoverPassword: '/recover-password',
  signUp: '/sign-up',
} as const

import { App } from '@/App'
import { DecksPage } from '@/pages'
import { CheckEmailPage } from '@/pages/auth/checkEmail'
import { Profile } from '@/pages/auth/profile'
import { RecoverPasswordPage } from '@/pages/auth/recoverPassword'
import { SignInPage } from '@/pages/auth/signIn'
import { SignUpPage } from '@/pages/auth/signUp'
import { Error404Page } from '@/pages/error404'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.login,
  },
  {
    element: <RecoverPasswordPage />,
    path: ROUTES.recoverPassword,
  },
  {
    element: <div>Hello</div>,
    path: ROUTES.base,
  },
  {
    element: <SignUpPage />,
    path: ROUTES.signUp,
  },
  {
    element: <Error404Page />,
    path: ROUTES.error,
  },
]

const privateRoutes: RouteObject[] = [
  {
    children: [
      {
        element: <SignInPage />,
        path: ROUTES.login,
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
        element: <DecksPage />,
        path: ROUTES.base,
      },
      {
        element: <SignUpPage />,
        path: ROUTES.signUp,
      },
      {
        element: <Profile />,
        path: ROUTES.profile,
      },
      {
        element: <Error404Page />,
        path: ROUTES.error,
      },
      {
        element: <DecksPage />,
        path: '/',
      },
    ],
    element: <App />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />
}
