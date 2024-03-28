import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner/spinner'

const meta: Meta = {
  args: {},
  component: Spinner,
  tags: ['autodocs'],
  title: 'Components/Spinner',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Small: Story = {
  args: {
    size: 'small',
  },
}

export const ButtonSpinner: Story = {
  args: {
    size: 'small',
  },
  render: () => (
    <Button variant={'secondary'}>
      <Spinner size={'small'} />
    </Button>
  ),
}
