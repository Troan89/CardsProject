import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { SignUp } from '@/components/auth/signUp'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { ROUTES } from '@/router/router'
import { useSignUpMutation } from '@/services/auth'
import { SignUpArgs } from '@/services/auth/auth.types'

import 'react-toastify/dist/ReactToastify.css'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()
  const notify = () => toast.error('User already exists')

  const handleSubmit = async (data: SignUpArgs) => {
    const { email, name, password } = data

    try {
      await signUp({ email, name, password }).unwrap()
      navigate(ROUTES.base)
    } catch (error: any) {
      if (error.data?.message === 'User already exists') {
        notify() // Выводим сообщение об ошибке, если пользователь уже зарегистрирован
      } else {
        toast.error(error?.data?.message ?? 'Could not sign up')
      }
    }
  }

  return (
    <PageWrapper>
      <SignUp onSubmit={handleSubmit} />
      <ToastContainer />
    </PageWrapper>
  )
}