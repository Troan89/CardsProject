import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  args: {
    count: 20,
    limit: 10,
    onChange: () => {},
    page: 10,
    siblings: 1,
  },
}
