import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from '@/pages'
import { Error404Page } from '@/pages/error404'

const publicRoutes: RouteObject[] = [
  {
    element: <div>login</div>,
    path: '/login',
  },
  {
    element: <Error404Page />,
    path: '/*',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
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
