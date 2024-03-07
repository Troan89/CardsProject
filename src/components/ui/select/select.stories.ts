import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
      title: "Yoo",
      disabled: false,
      value: "hello",
      placeholder: "My select",
      label: "Hello"
  },
}
