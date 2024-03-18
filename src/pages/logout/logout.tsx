import { useLogoutMutation } from '@/services/auth'

import s from './logout.module.scss'

export const Logout = () => {
  const [logout] = useLogoutMutation()

  return <div className={s.container}>Logout</div>
}
