import type { Meta, StoryObj } from '@storybook/react'

import {RecoverPassword} from './recover-password'

const meta = {
  component: RecoverPassword,
  tags: ['autodocs'],
  title: 'Auth/RecoverPassword',
} satisfies Meta<typeof RecoverPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
