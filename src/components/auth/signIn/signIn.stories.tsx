import type { Meta, StoryObj } from '@storybook/react'

import { SignIn } from './signIn'

const meta = {
  component: SignIn,
  tags: ['autodocs'],
  title: 'Auth/SignUp',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
