import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Error404Page } from '@/pages/error404'
import { SignInPage } from '@/pages/signInPage'
import { SignUpPage } from '@/pages/signUpPage'

export const ROUTES = {
  base: '/',
  error: '/*',
  login: '/login',
  signUp: '/signUp',
} as const

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
    element: <div>Hello</div>,
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
