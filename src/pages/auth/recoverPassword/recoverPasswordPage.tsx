import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RecoverPassword } from '@/components/auth/recoverPassword'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { Spinner } from '@/components/ui/spinner'
import { ROUTES } from '@/router/router'
import { useRecoverPasswordMutation } from '@/services/auth'

export const RecoverPasswordPage = () => {
  const [recoverPassword, { isLoading }] = useRecoverPasswordMutation()

  const navigate = useNavigate()

  const handleOnSubmit = async (email: string) => {
    try {
      await recoverPassword({ email }).unwrap()
      toast.success(' Password changed successfully!')
      navigate(ROUTES.checkEmail, { state: { email } })
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Uncaught Error')
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <PageWrapper>
      <RecoverPassword onSubmit={handleOnSubmit} />
    </PageWrapper>
  )
}
