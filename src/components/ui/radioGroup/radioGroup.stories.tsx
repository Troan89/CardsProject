import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './radioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const RadioGroupDefault: Story = {
  args: {
    options: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
      {
        label: 'Pineapple',
        value: 'pineapple',
      },
      {
        label: 'Apple',
        value: 'apple1',
      },
      {
        label: 'Banana',
        value: 'banana1',
      },
    ],
  },
}

export const RadioGroupDisabled: Story = {
  args: {
    disabled: true,
    options: [
      {
        label: 'Apple',
        value: 'apple',
      },
      {
        label: 'Banana',
        value: 'banana',
      },
      {
        label: 'Blueberry',
        value: 'blueberry',
      },
      {
        label: 'Grapes',
        value: 'grapes',
      },
      {
        label: 'Pineapple',
        value: 'pineapple',
      },
      {
        label: 'Apple',
        value: 'apple1',
      },
      {
        label: 'Banana',
        value: 'banana1',
      },
    ],
  },
}
