import { Link } from 'react-router-dom'

import { Icons } from '@/assets/icons/Icons'
import { UserDropdown } from '@/components/profile/UserDropdown'
import { Button } from '@/components/ui/button'

import s from './header.module.css'

type Props = {
  avatar?: string
  email?: string
  isLoggedIn?: boolean
  userName?: string
}

export const Header = ({ avatar, email, isLoggedIn, userName }: Props) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link to={'/'}>
          <Icons iconId={'logo'} />
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
