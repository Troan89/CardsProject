import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { FormTextField } from '@/components/formComponents/formTextField'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ROUTES } from '@/router/router'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signUp.module.scss'

const signUpSchema = z
  .object({
    confirmPassword: z.string(),
    email: z.string().email(),
    name: z.string().min(3).max(30),
    password: z.string().min(3).max(15),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type FormValues = z.infer<typeof signUpSchema>

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
    },
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Card className={s.cardSignUp}>
      <Typography className={s.title} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.formRoot} onSubmit={handleSubmit(onSubmit)}>
        <DevTool control={control} />
        <div className={s.name}>
          <FormTextField
            control={control}
            error={errors.name?.message}
            label={'Name'}
            name={'name'}
            type={'text'}
          />
        </div>
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
        <Button as={'button'} className={s.btn} fullWidth type={'submit'} variant={'primary'}>
          Sign Up
        </Button>
      </form>
      <Typography className={s.typography} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={NavLink} className={s.link} to={ROUTES.login} variant={'subtitle1'}>
        Sing In
      </Typography>
    </Card>
  )
}
