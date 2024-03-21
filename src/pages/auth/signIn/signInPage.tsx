import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/auth/signIn'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { ROUTES } from '@/router/router'
import { useLoginMutation } from '@/services/auth'
import { LoginArgs } from '@/services/auth/auth.types'

export const SignInPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = async (data: LoginArgs) => {
    if (isButtonDisabled) {
      return // Если кнопка уже отключена, не делаем ничего
    }

    try {
      setIsButtonDisabled(true) // Отключаем кнопку

      await login(data).unwrap()
      navigate(ROUTES.base)
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Could not sign in')
    } finally {
      setIsButtonDisabled(false) // Включаем кнопку после завершения
    }
  }

  return (
    <PageWrapper>
      <SignIn disabled={isButtonDisabled} onSubmit={handleSubmit} />
    </PageWrapper>
  )
}