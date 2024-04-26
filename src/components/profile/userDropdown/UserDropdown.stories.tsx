import type { Meta, StoryObj } from '@storybook/react'

import { UserDropdown } from '@/components/profile/userDropdown/UserDropdown'
import { withRouter } from 'storybook-addon-react-router-v6'

import AvatarDemo from '../../../assets/img/avatarDemo.jpeg'

const meta = {
  component: UserDropdown,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/UserDropdown',
} satisfies Meta<typeof UserDropdown>

export default meta
type Story = StoryObj<typeof meta>

export const BaseDropdownMenu: Story = {
  args: { avatar: AvatarDemo, email: '123jscvk@yandex.ru', userName: 'Ivan' },
}
