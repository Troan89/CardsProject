import type { Meta, StoryObj } from '@storybook/react'

import { Icons } from '@/assets/icons/Icons'
import { Avatar } from '@/components/ui/avatar/avatar'
// import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown/dropdown'

// import s from './dropdown.module.css'

import AvatarDemo from '../../../assets/img/avatarDemo.jpeg'

const meta = {
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const LearnDropdownMenu: Story = {
  args: {},
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icons iconId={'more-vertical-outline'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Icons iconId={'play-circle-outline'} /> Learn
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icons iconId={'edit-2-outline'} /> Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Icons iconId={'trash-outline'} /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const BaseDropdownMenu: Story = {
  args: {},
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {/*<Button className={s.trigger}>*/}
        <Avatar src={AvatarDemo} />
        {/*</Button>*/}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div>
            <Avatar src={AvatarDemo} />
          </div>
          <div>
            <div>Ivan</div>
            <div>ako@mail.ru</div>
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
  ),
}
