import { Meta, Story } from '@storybook/react'

import { Icons, IconsPropsType } from './Icons'

export default {
  component: Icons,
  title: 'Components/Icons',
} as Meta
const Template: Story<IconsPropsType> = args => <Icons {...args} />

export const Default = Template.bind({})
Default.args = {
  full: '#fff',
  iconId: 'home-outline',
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  full: '#fff',
  height: '80',
  iconId: 'stripe-svgrepo-com(4)',
  width: '80',
}

export const CustomColor = Template.bind({})
CustomColor.args = {
  full: 'var(--color-warning-300)',
  iconId: 'disabled-true',
}
