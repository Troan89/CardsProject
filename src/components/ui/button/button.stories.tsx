import type { Meta, StoryObj } from '@storybook/react'

import { Icons } from '@/assets/icons/Icons'

import { Button } from './'

const meta = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// История для основной кнопки
export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

// История для второстепенной кнопки
export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}

// История для кнопки с полной шириной
export const FullWidth: Story = {
  args: {
    children: 'Full Width Primary Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

// История для кнопки, выглядящей как ссылка
export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    href: 'https://google.com',
    variant: 'primary',
  },
}

export const PrimaryIcon: Story = {
  args: {
    children: (
      <>
        <Icons iconId={'log-out-outline'} /> Sign out
      </>
    ),
    disabled: false,
    variant: 'primary',
  },
}

export const SecondaryIcon: Story = {
  args: {
    children: (
      <>
        <Icons iconId={'log-out-outline'} /> Sign out
      </>
    ),
    disabled: false,
    variant: 'secondary',
  },
}

export const SecondaryDisabled: Story = {
  args: {
    children: 'Secondary Button',
    disabled: true,
    variant: 'secondary',
  },
}
