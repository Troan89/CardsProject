import { Link } from 'react-router-dom'

import { Email } from '@/assets/icons/email'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { ROUTES } from '@/router/router'

import s from './checkEmail.module.css'

type Props = {
  email?: string
}
export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>Check Email</Typography>
      <div>
        <Email />
      </div>
      <Typography className={s.info} variant={'body2'}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button as={Link} fullWidth to={ROUTES.login} variant={'primary'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
