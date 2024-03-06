import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Error: Story = {
  args: {
    className: 'error',
    error: 'Error message',
    label: 'Input with error',
    onChange: () => {
      console.log('ERROR')
    },
    type: 'text',
    value: 'Error',
  },
}

export const Email: Story = {
  args: {
    label: 'Input with email',
    onChange: () => {
      console.log('email')
    },
    type: 'text',
  },
}
export const Password: Story = {
  args: {
    label: 'Input with email',
    onChange: () => {
      console.log('password')
    },
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    label: 'Input with search',
    onChange: () => {
      console.log('Search')
    },
    type: 'search',
    value: 'Input search',
  },
}
