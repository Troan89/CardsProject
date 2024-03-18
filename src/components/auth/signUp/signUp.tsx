import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signUp.module.scss'

const loginSchema = z.object({
  confirmPassword: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

type LogProps = {
  onSubmit: (data: FormValues) => void
}
export const SignUp = ({ onSubmit }: LogProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.cardSignUp}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.formRoot} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.email}>
          <FormTextField
            control={control}
            error={errors.email?.message}
            label={'Email'}
            name={'email'}
            type={'email'}
          />
        </div>
        <div className={s.password}>
          <FormTextField
            control={control}
            error={errors.password?.message}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
        </div>
        <div className={s.confirmPassword}>
          <FormTextField
            control={control}
            error={errors.password?.message}
            label={'Confirm password'}
            name={'confirmPassword'}
            type={'password'}
          />
        </div>
        <Button as={NavLink} className={s.btn} to={'#'} type={'submit'} variant={'primary'}>
          Sing Up
        </Button>
      </form>
      <Typography className={s.typography} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={NavLink} className={s.link} to={'#'} variant={'subtitle1'}>
        Sing In
      </Typography>
    </Card>
  )
}
