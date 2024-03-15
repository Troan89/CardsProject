import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { FormCheckbox } from '@/components/formComponents/formCheckbox'
import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signIn.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export type FormValues = z.infer<typeof loginSchema>

type LoginProps = {
  onSubmit: (data: FormValues) => void
}
export const SignIn = ({ onSubmit }: LoginProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.cardForm}>
      <div className={s.formWrapper}>
        <Typography className={s.h1} variant={'h1'}>
          Sign In
        </Typography>
        <form className={s.formRoot} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.email}>
            <FormTextField
              {...register('email')}
              control={control}
              error={errors.email?.message}
              label={'email'}
              type={'email'}
            />
          </div>
          <div className={s.password}>
            <FormTextField
              {...register('password')}
              control={control}
              error={errors.password?.message}
              label={'password'}
              type={'password'}
            />
          </div>
          <FormCheckbox
            className={s.checkbox}
            control={control}
            label={'remember me'}
            name={'rememberMe'}
          />
          <Typography as={NavLink} className={s.recoverLink} to={'#'} variant={'body1'}>
            Forgot Password?
          </Typography>
          <Button as={NavLink} className={s.btn} to={'#'} type={'submit'} variant={'primary'}>
            Sign In
          </Button>
        </form>
        <Typography className={s.typography} variant={'body2'}>
          Don&apos;t have an account?
        </Typography>
        <Typography
          as={NavLink}
          className={s.singUp}
          style={{ color: 'var(--color-accent-500)' }}
          to={'#'}
          variant={'subtitle1'}
        >
          Sign Up
        </Typography>
      </div>
    </Card>
  )
}
