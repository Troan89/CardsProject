import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { RecoverPassword } from '@/components/auth/recoverPassword'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { ROUTES } from '@/router/router'
import { useRecoverPasswordMutation } from '@/services/auth'

export const RecoverPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()

  const navigate = useNavigate()

  const handleOnSubmit = async (email: string) => {
    try {
      await recoverPassword({ email }).unwrap()
      navigate(ROUTES.checkEmail, { state: { email } })
    } catch (error: any) {
      toast.error(error?.data?.message ?? 'Uncaught Error')
    }
  }

  return (
    <PageWrapper>
      <RecoverPassword onSubmit={handleOnSubmit} />
    </PageWrapper>
  )
}
