import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/components/auth/personalInformation/personalInformation'
import { withRouter } from 'storybook-addon-react-router-v6'

import avatar from '../../../assets/img/avatarDemo.jpeg'

const meta: Meta<typeof PersonalInformation> = {
  component: PersonalInformation,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/PersonalInformation',
}

export default meta

type Story = StoryObj<typeof meta>

// @ts-ignore
export const DefaultEditProfile: Story = {
  args: {
    // @ts-ignore
    data: {
      avatar: avatar,
      email: 'example@gmail.com',
      name: 'User',
    },
    logout: () => {},
    updateAvatar: async (avatar: File) => {
      console.log('Updating avatar:', avatar)
    },
    updateName: () => {},
  },
}
