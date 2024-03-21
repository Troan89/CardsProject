import { Link } from 'react-router-dom'

import { Email } from '@/assets/icons/email'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './checkEmail.module.css'

type Props = {
  email?: string
}
export const CheckEmail = ({ email = '123222@yandex.ru' }: Props) => {
  return (
    <Card className={s.wrapper}>
      <Typography variant={'h1'}>Check Email</Typography>

      <div>
        <Email />
      </div>

      <Typography className={s.info} variant={'body2'}>
        We’ve sent an Email with instructions to {email}
      </Typography>

      <Button as={Link} fullWidth to={'/sing-in'} variant={'primary'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
