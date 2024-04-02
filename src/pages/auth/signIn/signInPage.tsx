import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignIn } from '@/components/auth/signIn'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { Spinner } from '@/components/ui/spinner'
import { ROUTES } from '@/router/router'
import { useLoginMutation } from '@/services/auth'
import { LoginArgs } from '@/services/auth/auth.types'

export const SignInPage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const [login, { isLoading }] = useLoginMutation()
  const navigate = useNavigate()

  const handleSubmit = async (data: LoginArgs) => {
    if (isButtonDisabled) {
      return
    }

    try {
      setIsButtonDisabled(true)

      await login(data).unwrap()
      toast.success('Welcome! Login success')
      navigate(ROUTES.base)
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Could not sign in')
    } finally {
      setIsButtonDisabled(false)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <PageWrapper>
      <SignIn disabled={isButtonDisabled} onSubmit={handleSubmit} />
    </PageWrapper>
  )
}
