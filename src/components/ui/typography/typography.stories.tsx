import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'large',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'This is H1 Typography',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'This is H2 Typography',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'This is H3 Typography',
    variant: 'h3',
  },
}

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'This is H4 Typography',
    variant: 'h4',
  },
}

export const Body1: Story = {
  args: {
    children: 'This text is body 1',
    variant: 'body1',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'This text is Subtitle 1',
    variant: 'subtitle1',
  },
}

export const Body2: Story = {
  args: {
    children: 'This text is body 2',
    variant: 'body2',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'This is Subtitle 2 Typography',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'This is Caption Typography',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'This is Overline Typography',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    as: 'a',
    children: 'This is Link 1 Typography',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    as: 'a',
    children: 'This is Link 2 Typography',
    variant: 'link2',
  },
}
