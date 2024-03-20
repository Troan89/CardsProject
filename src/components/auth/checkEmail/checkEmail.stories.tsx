import type { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from '@/components/auth/checkEmail/checkEmail'

const meta = {
  component: CheckEmail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/CheckEmail',
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const CheckEmailDefault: Story = {
  args: { email: '123wwwwww@yandex.ru' },
}
