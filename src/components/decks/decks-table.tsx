import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'
import { Column, TableSort } from '@/components/ui/table/tableSort'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/services/decks/decks.types'

import { Table } from '../ui/table'

const columns: Column[] = [
  { column: 1, sortBy: 'name', title: 'Name' },
  { column: 2, sortBy: 'cards', title: 'Cards' },
  { column: 3, sortBy: 'last updated', title: 'Last Updated' },
  { column: 4, sortBy: 'created by', title: 'Created by' },
  { column: 5, sortBy: '', title: '' },
]

type Props = {
  decks: Deck[] | undefined
  onDeleteClick?: (id: string) => void
  onEditClick?: (id: string) => void
}

export const DecksTable = ({ decks, onDeleteClick, onEditClick }: Props) => {
  const handleEditClick = (id: string) => () => onEditClick?.(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick?.(id)

  return (
    <Table.Root>
      <TableSort columns={columns} />
      <Table.Body>
        {decks?.map((deck, index) => (
          <Table.Row key={index}>
            <Table.Cell>
              <Typography variant={'body2'}>{deck.name}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{deck.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{deck.updated}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}> {deck.author.name}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Button>
                <Icons iconId={'decksList-play'} />
              </Button>
              <Button onClick={handleEditClick(deck.id)}>
                <Icons iconId={'decksList-edit'} />
              </Button>
              <Button onClick={handleDeleteClick(deck.id)}>
                <Icons iconId={'decksList-delete'} />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
