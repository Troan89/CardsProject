import { CreateNewPassword } from '@/components/auth/createNewPassword'
import { PageWrapper } from '@/components/ui/pageWrapper'

export const CreatePassword = () => {
  const handlerOnSubmit = () => {}

  return (
    <PageWrapper>
      <CreateNewPassword onSubmit={handlerOnSubmit} />
    </PageWrapper>
  )
}
