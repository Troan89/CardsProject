import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { CardsProject } from '@/cardsProject'
import { SignIn } from '@/components/auth/signIn'
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
        element: <SignIn onSubmit={data => console.log(data)} />,
        path: '/sing-in',
      },
    ],
    element: <CardsProject />,
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
