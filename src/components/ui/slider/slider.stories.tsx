import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/components/ui/slider/slider'

const meta = {
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const SliderNative: Story = {
  args: {
    value: [25, 100],
  },
}
