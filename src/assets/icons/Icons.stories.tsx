import { Meta, Story } from '@storybook/react'

import { Icons, IconsPropsType } from './Icons'

export default {
  component: Icons,
  title: 'Components/Icons',
} as Meta
const Template: Story<IconsPropsType> = args => <Icons {...args} />

export const Default = Template.bind({})
Default.args = {
  iconId: 'home-outline',
}

export const CustomSize = Template.bind({})
CustomSize.args = {
  height: '32',
  iconId: 'home',
  width: '32',
}
