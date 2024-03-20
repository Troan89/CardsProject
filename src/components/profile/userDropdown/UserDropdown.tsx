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

import s from './userDropdown.module.css'
type Props = {
  avatar?: string
  email?: string
  userName?: string
}
export const UserDropdown = ({ avatar, email, userName }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={s.wrapper}>
        <div>{userName}</div>
        {/*<Button className={s.trigger}>*/}
        <Avatar src={avatar || AvatarDemo} />
        {/*</Button>*/}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <Avatar src={AvatarDemo} />
          </div>
          <div>
            <div>{userName}</div>
            <div>{email}</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icons iconId={'person-outline'} /> My Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icons iconId={'log-out-outline'} /> Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
