import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/auth/signIn'
import { useLoginMutation } from '@/services/auth'
import { LoginArgs } from '@/services/auth/auth.types'

import s from './login.module.scss'

export const Login = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const handleSubmit = async (data: LoginArgs) => {
    try {
      await login(data).unwrap()
      navigate('/')
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Could not sign in')
    }
  }

  return (
    <div className={s.container}>
      <SignIn onSubmit={handleSubmit} />
    </div>
  )
}
