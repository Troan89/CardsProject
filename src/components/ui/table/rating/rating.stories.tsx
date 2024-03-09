import { Meta, StoryObj } from '@storybook/react'

import { Rating } from './Rating'

const meta = {
  component: Rating,
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta

type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    onClick: () => {
      console.log('rating')
    },
    value: 4,
  },
}

export const Rating1: Story = {
  args: {
    onClick: () => {
      console.log('rating')
    },
    value: 1,
  },
}

export const Rating2: Story = {
  args: {
    onClick: () => {
      console.log('rating')
    },
    value: 2,
  },
}

export const Rating3: Story = {
  args: {
    onClick: () => {
      console.log('rating')
    },
    value: 3,
  },
}

export const Rating4: Story = {
  args: {
    onClick: () => {
      console.log('rating')
    },
    value: 4,
  },
}

export const Rating5: Story = {
  args: {
    onClick: () => {
      console.log('rating')
    },
    value: 5,
  },
}
