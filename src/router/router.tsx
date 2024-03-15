import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AvatarDemo from '@/assets/img/avatarDemo.jpeg'
import { Header } from '@/components/ui/header/header'

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header avatar={AvatarDemo} email={'111@yandex.ru'} isLoggedIn userName={'Ivan'} />
      </div>
    ),
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
