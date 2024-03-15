import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/components/ui/rating'
import { Typography } from '@/components/ui/typography'

import { Table } from './table'
import { Sort, TableSort, TableSortProps } from './tableSort/tableSort'

const meta = {
  argTypes: {},
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  {
    answer: 'Saturday',
    emoji: '🙂',
    number: 1,
    question: 'What day is it today?',
    username: 'Jon',
  },
  {
    answer: 'JavaScript',
    emoji: '💻',
    number: 2,
    question: 'What is the best programming language?',
    username: 'Lin',
  },
  {
    answer: '"Master and Margarita"',
    emoji: '🌈',
    number: 3,
    question: 'What should I read?',
    username: 'Paul',
  },
  {
    answer: '"The Imitation Game"',
    emoji: '🎬',
    number: 4,
    question: 'What movie should I watch?',
    username: 'Max',
  },
  {
    answer: 'Artificial Intelligence',
    emoji: '🤖',
    number: 5,
    question: 'What is AI?',
    username: 'Alex',
  },
]

const Template: StoryObj<TableSortProps> = {
  args: {
    columns: [
      { column: 1, sortBy: 'number', title: 'Number' },
      { column: 2, sortBy: 'question', title: 'Question' },
      { column: 3, sortBy: 'answer', title: 'Answer' },
      { column: 4, sortBy: 'username', title: 'Username' },
      { column: 5, sortBy: 'rating', sortable: false, title: 'Rating' },
      { column: 6, sortBy: 'emoji', sortable: false, title: 'Emoji' },
    ],
    onSort: (sort: Sort) => console.log(sort),
    sort: null,
  },
  render: args => (
    <Table.Root>
      <TableSort {...args} />
      <Table.Body>
        {options.map((option, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Typography variant={'body2'}>{option.number}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{option.question}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{option.answer}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}> {option.username}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Rating value={4} />
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{option.emoji}</Typography>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  ),
}

export const TabFiveCols: StoryObj<TableSortProps> = Template
export const TabFourCols: Story = {
  args: {},
  render: args => {
    return (
      <Table.Root {...args}>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell columns={5}>
              <Typography variant={'subtitle2'}>Вопрос</Typography>
            </Table.HeadCell>
            <Table.HeadCell columns={5}>
              <Typography variant={'subtitle2'}>Ответ</Typography>
            </Table.HeadCell>
            <Table.HeadCell columns={2}>
              <Typography variant={'subtitle2'}>Рейтинг</Typography>
            </Table.HeadCell>
            <Table.HeadCell columns={3}>
              <Typography variant={'subtitle2'}>Смайлик</Typography>
            </Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {options.map((option, index) => (
            <Table.Row key={index}>
              <Table.Cell rows={5}>
                <Typography variant={'body2'}>{option.question}</Typography>
              </Table.Cell>
              <Table.Cell rows={5}>
                <Typography variant={'body2'}>{option.answer}</Typography>
              </Table.Cell>
              <Table.Cell rows={2}>
                <Rating value={4} />
              </Table.Cell>
              <Table.Cell rows={3}>
                <Typography variant={'body2'}>{option.emoji}</Typography>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    )
  },
}
