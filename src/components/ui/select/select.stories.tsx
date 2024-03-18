import type { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItem } from './'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

// export const Controlled: Story = {
//   render: args => {
//     return (
//       <Select {...args} label={'Click here'} placeholder={'Hello'}>
//         <SelectItem value={'1'}>Item 1</SelectItem>
//         <SelectItem value={'2'}>Item 2</SelectItem>
//       </Select>
//     )
//   },
// }

export const Controlled: Story = {
  args: {
    className: 'custom-class',
    defaultValue: '1',
    disabled: false,
    label: 'Click here',
    onChange: (value: number | string) => console.log(value),
    placeholder: '',
    title: '111',
    value: '1',
  },
  render: args => {
    return (
      <Select {...args} placeholder={'Hello'}>
        <SelectItem value={'1'}>Item 1</SelectItem>
        <SelectItem value={'2'}>Item 2</SelectItem>
      </Select>
    )
  },
}
