import type { Meta, StoryObj } from '@storybook/react'

import { TabSwitcher, TabType } from './'

const meta: Meta = {
  argTypes: {
    onValueChange: { action: 'onValueChange' },
  },
  component: TabSwitcher,
  tags: ['autodocs'],
  title: 'Components/TabSwitcher',
}

export default meta

type Story = StoryObj<typeof meta>

const tabs: TabType[] = [
  { title: 'Tab 1', value: 'Tab 1' },
  { title: 'Tab 2', value: 'Tab 2' },
  { title: 'Tab 3', value: 'Tab 3' },
  { disabled: true, title: 'Tab 4', value: 'Tab 4' },
  { title: 'Tab 5', value: 'Tab 5' },
]

export const Default: Story = (args: TabType[]) => <TabSwitcher tabs={[]} {...args} />

Default.args = {
  defaultValue: 'Tab 1',
  tabs,
  title: 'Switcher',
}
