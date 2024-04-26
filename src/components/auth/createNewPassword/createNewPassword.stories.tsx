import type { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '@/components/auth/createNewPassword/createNewPassword'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  component: CreateNewPassword,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/CreateNewPasswordPage',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const CreateNewPasswordDefault: Story = {
  args: {
    onSubmit: data => {
      console.log(data)
    },
  },
}
