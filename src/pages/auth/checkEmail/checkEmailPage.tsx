import { useLocation } from 'react-router'

import { CheckEmail } from '@/components/auth/checkEmail/checkEmail'
import { PageWrapper } from '@/components/ui/pageWrapper'

export const CheckEmailPage = () => {
  const {
    state: { email },
  } = useLocation()

  return (
    <PageWrapper>
      <CheckEmail email={email} />
    </PageWrapper>
  )
}
