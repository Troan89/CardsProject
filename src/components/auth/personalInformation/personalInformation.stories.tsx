import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/components/auth/personalInformation/personalInformation'

const meta = {
  component: PersonalInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultEditProfile: Story = {
  args: {
    email: '123@yandex.ru',
    name: 'Ivan',
  },
}
