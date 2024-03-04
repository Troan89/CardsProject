import { Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from './check-box'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
}

export default meta

type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    checked: true,
    disabled: false,
    label: 'Click here',
  },
}

export const Unchecked: Story = {
  args: {
    disabled: false,
    label: 'Click here to',
  },
}
