import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { SignInPage } from '@/pages/signInPage'
import { SignUpPage } from '@/pages/signUpPage'

export const ROUTES = {
  base: '/',
  error: '/*',
  login: '/login',
  newPassword: '/createPassword',
  signUp: '/signUp',
} as const

import { App } from '@/App'
import { SignIn } from '@/components/auth/signIn'
import { DecksPage } from '@/pages'
import { Error404Page } from '@/pages/error404'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: ROUTES.login,
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
        element: <div>Hello !</div>,
        path: '/123',
      },
      {
        element: <Error404Page />,
        path: '/*',
      },
      {
        element: <SignIn disabled={false} onSubmit={data => console.log(data)} />,
        path: '/sing-in',
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
