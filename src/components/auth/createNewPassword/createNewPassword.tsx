import { useForm } from 'react-hook-form'

import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewPassword.module.css'

const loginSchema = z.object({
  password: z.string().min(3),
})

type FormValues = z.infer<typeof loginSchema>

type Props = {
  onSubmit: (data: FormValues) => void
}

export const CreateNewPassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.wrapper}>
      <form className={s.content} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Typography variant={'h1'}>Create new password</Typography>
        </div>

        <FormTextField
          {...register('password')}
          control={control}
          error={errors.password?.message}
          label={'password'}
          type={'password'}
        />
        <div>
          <Typography className={s.info}>
            Create new password and we will send you further instructions to email
          </Typography>
        </div>
        <Button fullWidth type={'submit'} variant={'primary'}>
          Create new password
        </Button>
      </form>
    </Card>
  )
}
