import type { Meta, StoryObj } from '@storybook/react'

import { BackButton } from '@/components/ui/backButton/backButton'
import { withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  args: {},
  component: BackButton,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'components/BackButton',
} satisfies Meta<typeof BackButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
