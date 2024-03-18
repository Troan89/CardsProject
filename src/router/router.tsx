import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Login } from '@/pages/login'
import { Logout } from '@/pages/logout'

export const ROUTES = {
  login: '/login',
  logout: '/logout',
} as const

const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: ROUTES.login,
  },
  {
    element: <Logout />,
    path: ROUTES.logout,
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

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
