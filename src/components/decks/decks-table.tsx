import { Icons } from '@/assets/icons/Icons'
import { Column, Sort, TableSort } from '@/components/ui/table/tableSort'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/services/decks/decks.types'

import s from './decks-table.module.scss'

import { Table } from '../ui/table'

const columns: Column[] = [
  {
    column: 3,
    sortBy: 'name',
    title: 'Name',
  },
  {
    column: 1,
    sortBy: 'cards',
    title: 'Cards',
  },
  {
    column: 2,
    sortBy: 'updated',
    title: 'Last Updated',
  },
  {
    column: 3,
    sortBy: 'author.name',
    title: 'Created By',
  },
  {
    column: 1,
    sortBy: 'actions',
    title: '',
  },
]

type Props = {
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
  onSort: (key: Sort) => void
  sort?: Sort
}

export const DecksTable = ({ decks, onDeleteClick, onEditClick, onSort, sort }: Props) => {
  const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)

  return (
    <Table.Root>
      <TableSort columns={columns} onSort={onSort} sort={sort} />
      <Table.Body>
        {decks?.map((deck, index) => (
          <Table.Row key={index}>
            <Table.Cell rows={3}>
              <Typography variant={'body2'}>{deck.name}</Typography>
            </Table.Cell>
            <Table.Cell rows={1}>
              <Typography variant={'body2'}>{deck.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell rows={2}>
              <Typography variant={'body2'}>{new Date(deck.updated).toLocaleDateString('ru-RU')}</Typography>
            </Table.Cell>
            <Table.Cell rows={3}>
              <Typography variant={'body2'}> {deck.author.name}</Typography>
            </Table.Cell>
            <Table.Cell className={s.lastCol} rows={1}>
              <button className={s.icon}>
                <Icons iconId={'decksList-play'} />
              </button>
              <button className={s.icon} onClick={handleEditClick(deck.id)}>
                <Icons iconId={'decksList-edit'} />
              </button>
              <button
                className={s.icon}
                onClick={handleDeleteClick(deck.id)}
                style={{ fill: 'write' }}
              >
                <Icons iconId={'decksList-delete'} />
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
