import { useForm } from 'react-hook-form'

import { NameValues } from '@/components/auth/personalInformation/personalInformation'
import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { User } from '@/services/auth/auth.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './nameEditor.module.scss'

export const NameSchema = z.object({
  name: z.string().min(3).trim(),
})

type NameNameEditorProps = {
  data?: User
  onSubmit: (formData: NameValues) => void
}

export const NameEditor = ({ data, onSubmit }: NameNameEditorProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<NameValues>({
    defaultValues: { name: data?.name ?? 'User' },
    resolver: zodResolver(NameSchema),
  })

  const onSubmitHandler = (formData: NameValues) => {
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <FormTextField
        control={control}
        error={errors.name?.message}
        label={'Name'}
        name={'name'}
        type={'text'}
      />
      <Button className={s.saveButton} fullWidth type={'submit'} variant={'primary'}>
        Save Changes
      </Button>
    </form>
  )
}
