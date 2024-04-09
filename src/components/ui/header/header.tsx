import { Link } from 'react-router-dom'

import { SvgLogo } from '@/assets/icons/logo'
import { UserDropdown } from '@/components/profile/userDropdown/UserDropdown'
import { Button } from '@/components/ui/button'
import { ROUTES } from '@/router/router'

import s from './header.module.css'

type Props = {
  avatar?: null | string
  email?: string
  isLoggedIn?: boolean
  logout: () => void
  userName?: string
}

export const Header = ({ avatar, email, isLoggedIn, logout, userName }: Props) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link to={ROUTES.base}>
          <SvgLogo />
        </Link>
        {isLoggedIn && (
          <UserDropdown avatar={avatar} email={email} logout={logout} userName={userName} />
        )}
        {!isLoggedIn && (
          <Button as={Link} to={ROUTES.login} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
