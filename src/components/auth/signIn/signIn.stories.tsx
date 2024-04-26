import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import { SignIn } from './signIn'

const meta = {
  component: SignIn,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Auth/SignIn',
} as Meta<typeof SignIn>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => <SignIn {...args} />,
}
