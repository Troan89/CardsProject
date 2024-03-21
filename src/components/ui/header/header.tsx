import { Link } from 'react-router-dom'

import { SvgLogo } from '@/assets/icons/logo'
import { UserDropdown } from '@/components/profile/userDropdown/UserDropdown'
import { Button } from '@/components/ui/button'

import s from './header.module.css'

type Props = {
  avatar?: string
  email?: string
  isLoggedIn?: boolean
  userName?: string
}

export const Header = ({ avatar, email, isLoggedIn = true, userName = 'Ivan' }: Props) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link to={'/'}>
          <SvgLogo />
        </Link>
        {isLoggedIn && <UserDropdown avatar={avatar} email={email} userName={userName} />}
        {!isLoggedIn && (
          <Button as={Link} to={'/sign-in'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
