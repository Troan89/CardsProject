import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './recoverPassword.module.scss'

const RecoverPasswordSchema = z.object({
  email: z.string().email(),
})

export type FormValues = z.infer<typeof RecoverPasswordSchema>

type Props = {
  onSubmit: (email: string) => void
}

export const RecoverPassword = ({ onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(RecoverPasswordSchema),
  })

  const onSubmitHandler = (data: FormValues) => {
    onSubmit(data.email)
  }

  return (
    <Card className={s.card}>
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={s.email}>
          <FormTextField
            {...register('email')}
            control={control}
            error={errors.email?.message}
            label={'Email'}
            type={'email'}
          />
        </div>
        <Typography className={s.instr} variant={'body2'}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button
          className={s.btn}
          fullWidth
          style={{ marginBottom: '31px', marginLeft: '0' }}
          type={'submit'}
          variant={'primary'}
        >
          Send Instructions
        </Button>
      </form>
      <Typography className={s.letter} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography as={Link} className={s.loginLink} to={'#'} variant={'link1'}>
        Try logging in
      </Typography>
    </Card>
  )
}
