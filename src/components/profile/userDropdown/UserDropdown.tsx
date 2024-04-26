import { useNavigate } from 'react-router-dom'

import { Icons } from '@/assets/icons/Icons'
import AvatarDemo from '@/assets/img/avatarDemo.jpeg'
import { Avatar } from '@/components/ui/avatar/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { Typography } from '@/components/ui/typography'
import { ROUTES } from '@/router/router'

import s from './userDropdown.module.css'

type Props = {
  avatar?: null | string
  email?: string
  logout: () => void
  userName?: string
}

export const UserDropdown = ({ avatar, email, logout, userName }: Props) => {
  const navigate = useNavigate()

  const handleProfileClick = () => {
    navigate(ROUTES.profile)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={s.wrapper}>
        <Typography as={'div'}>{userName}</Typography>
        <Avatar src={avatar || AvatarDemo} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <Avatar src={avatar || AvatarDemo} />
          </div>
          <div>
            <Typography as={'div'}>{userName}</Typography>
            <Typography as={'div'}>{email}</Typography>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleProfileClick}>
          <Icons iconId={'person-outline'} /> My Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={logout}>
          <Icons iconId={'log-out-outline'} /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
