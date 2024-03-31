import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CreateNewPassword, FormValues } from '@/components/auth/createNewPassword'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { ROUTES } from '@/router/router'
import { useResetPasswordMutation } from '@/services/auth'

import { Spinner } from '@/components/ui/spinner'

export const CreateNewPasswordPage = () => {
  const [resetPassword, { isLoading }] = useResetPasswordMutation()
  const { token } = useParams<{ token: string }>()
  const navigate = useNavigate()

  const handlerOnSubmit = async (data: FormValues) => {
    if (token) {
      try {
        await resetPassword({ password: data.password, token: token })
        toast.success('Password changed successfully')
        navigate(ROUTES.login)
      } catch (error) {
        toast.error('An error has occurred. Please, try again.')
      }
    } else {
      toast.error('User not found')
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <PageWrapper>
      <CreateNewPassword onSubmit={handlerOnSubmit} />
    </PageWrapper>
  )
}
