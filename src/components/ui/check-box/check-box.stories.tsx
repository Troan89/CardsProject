import { useState } from 'react'

import { Meta, type StoryObj } from '@storybook/react'

import { Checkbox } from './check-box'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
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
      <Checkbox
        {...args}
        checked={checked}
        label={'Click here'}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}
