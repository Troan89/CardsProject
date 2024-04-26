import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { CheckBox } from './checkBox'

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'Components/CheckBox',
}

export default meta

type Story = StoryObj<typeof meta>
export const Uncontrolled: Story = {
  args: {
    disabled: false,
    label: 'Click here',
  },
}

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckBox
        {...args}
        checked={checked}
        label={'Click here'}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}
