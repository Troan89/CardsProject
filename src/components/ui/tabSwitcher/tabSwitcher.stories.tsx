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
  { content: <div>Tab 1 Content</div>, title: 'Tab 1', value: 'Tab 1' },
  { content: <div>Tab 2 Content</div>, title: 'Tab 2', value: 'Tab 2' },
  { content: <div>Tab 3 Content</div>, title: 'Tab 3', value: 'Tab 3' },
  { content: <div>Tab 4 Content</div>, disabled: true, title: 'Tab 4', value: 'Tab 4' },
  { content: <div>Tab 5 Content</div>, title: 'Tab 5', value: 'Tab 5' },
]

export const Default: Story = (args: TabType[]) => <TabSwitcher tabs={[]} {...args} />

Default.args = {
  defaultValue: 'Tab 1',
  tabs,
  title: 'Switcher',
}
