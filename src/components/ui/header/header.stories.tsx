import type { Meta, StoryObj } from '@storybook/react'

import AvatarDemo from '@/assets/img/avatarDemo.jpeg'
import { Header } from '@/components/ui/header/header'

const meta = {
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderIsLoggedIn: Story = {
  args: { avatar: AvatarDemo, email: '111@yandex.ru', isLoggedIn: true, userName: 'Ivan' },
}

export const HeaderIsLoggedInFalse: Story = {
  args: { isLoggedIn: false },
}
