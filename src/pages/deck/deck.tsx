import { Table } from '@/components/ui/table'
import { Column, TableSort } from '@/components/ui/table/tableSort'

const columns: Column[] = [
  {
    column: 1,
    sortBy: 'asc',
    title: 'Name',
  },
  {
    column: 2,
    sortBy: 'asc',
    title: 'Cards',
  },
  {
    column: 3,
    sortBy: 'asc',
    title: 'Last Updated',
  },
  {
    column: 4,
    sortBy: 'asc',
    title: 'Created By',
  },
  {
    column: 5,
    sortBy: 'asc',
    title: '',
  },
]

export const Deck = () => {
  return (
    <>
      <TableSort columns={columns}></TableSort>
      <Table.Row>dddd</Table.Row>
      <Table.Row>sss</Table.Row>
      <Table.Row>ggg</Table.Row>
      <Table.Row>jjj</Table.Row>
    </>
  )
}
