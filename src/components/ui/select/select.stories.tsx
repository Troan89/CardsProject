import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItem } from './'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    disabled: false,
    label: 'Hello',
    placeholder: 'My select',
    title: 'Yoo',
    value: 'hello',
  },
}

export const Controlled: Story = {
  render: args => {
    return (
      <Select {...args} label={'Click here'} placeholder={'Hello'}>
        <SelectItem value={'1'}>Item 1</SelectItem>
        <SelectItem value={'2'}>Item 2</SelectItem>
      </Select>
    )
  },
}
