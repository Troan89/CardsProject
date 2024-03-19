import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'
import { TableSort } from '@/components/ui/table/tableSort'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/services/decks/decks.types'

import { Table } from '../ui/table'

const columns = [
  { column: 1, sortBy: 'number', title: 'Number' },
  { column: 2, sortBy: 'question', title: 'Question' },
  { column: 3, sortBy: 'answer', title: 'Answer' },
  { column: 4, sortBy: 'username', title: 'Username' },
  { column: 5, sortBy: 'rating', sortable: false, title: 'Rating' },
  { column: 6, sortBy: 'emoji', sortable: false, title: 'Emoji' },
]

type Props = {
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
}

export const DecksTable = ({ decks, onDeleteClick, onEditClick }: Props) => {
  const handleEditClick = (id: string) => () => onEditClick(id)
  const handleDeleteClick = (id: string) => () => onDeleteClick(id)

  return (
    <Table.Root>
      <TableSort columns={[]} {...columns} />
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
              <Button onClick={handleEditClick}>
                <Icons iconId={'decksList-edit'} />
              </Button>
              <Button onClick={handleDeleteClick}>
                <Icons iconId={'decksList-delete'} />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
