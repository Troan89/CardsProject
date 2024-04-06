import { memo } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Icons } from '@/assets/icons/Icons'
import { DeleteDeckDialog } from '@/components/decks/delete-deck-dialog'
import { EditDeckDialog } from '@/components/decks/edit-deck-dialog'
import { Button } from '@/components/ui/button'
import { Column, Sort, TableSort } from '@/components/ui/table/tableSort'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import { useDeleteDeckMutation, useUpdateDeckMutation } from '@/services/decks/decks.service'
import { Deck, EditDecks } from '@/services/decks/decks.types'

import s from './decks-table.module.scss'

import pic from '../../assets/img/imgreplace.jpg'
import { Table } from '../ui/table'

const columns: Column[] = [
  {
    column: '3',
    sortBy: 'name',
    title: 'Name',
  },
  {
    column: '1',
    sortBy: 'cardsCount',
    title: 'Cards',
  },
  {
    column: '2',
    sortBy: 'updated',
    title: 'Last Updated',
  },
  {
    column: '2',
    sortBy: 'author.name',
    title: 'Created By',
  },
  {
    column: '2',
    sortBy: 'a',
    sortable: false,
    title: '',
  },
]

type Props = {
  decks: Deck[] | undefined
  onSort: (key: Sort) => void
  sort?: Sort
}

export const DecksTable = memo(({ decks, onSort, sort }: Props) => {
  const { data: me } = useGetMeQuery()
  const [deleteDecks] = useDeleteDeckMutation()
  const [editDecks] = useUpdateDeckMutation()

  const deleteDeck = async (id: string) => {
    const res = await deleteDecks({ id })

    if ('data' in res) {
      toast.success('Deck deleted successfully!')
    }
    if ('error' in res) {
      const errorMessage =
        // @ts-ignore
        res.error?.data?.errorMessages?.[0]?.message ||
        // @ts-ignore
        res.error?.data?.message ||
        'Unknown error occurred'

      toast.error(`Error deleting deck: ${errorMessage}`)
    }
  }

  const editDeck = async (data: EditDecks) => {
    const res = await editDecks(data)

    if ('data' in res) {
      toast.success('Deck edit successfully!')
    }
    if ('error' in res) {
      const errorMessage =
        // @ts-ignore
        res.error?.data?.errorMessages?.[0]?.message ||
        // @ts-ignore
        res.error?.data?.message ||
        'Unknown error occurred'

      toast.error(`Error editing deck: ${errorMessage}`)
    }
  }

  return (
    <Table.Root>
      <TableSort columns={columns} onSort={onSort} sort={sort} />
      <Table.Body>
        {decks?.map((deck, index) => (
          <Table.Row key={index}>
            <Table.Cell rows={'3'}>
              <Typography as={Link} className={s.root} to={`decks/${deck.id}`}>
                {deck.cover ? (
                  <img alt={deck.name} src={deck.cover} />
                ) : (
                  <img alt={'react'} src={pic} />
                )}
                <Typography variant={'body2'}>{deck.name}</Typography>
              </Typography>
            </Table.Cell>
            <Table.Cell rows={'1'}>
              <Typography variant={'body2'}>{deck.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell rows={'2'}>
              <Typography variant={'body2'}>
                {new Date(deck.updated).toLocaleDateString('ru-RU')}
              </Typography>
            </Table.Cell>
            <Table.Cell rows={'2'}>
              <Typography variant={'body2'}> {deck.author.name}</Typography>
            </Table.Cell>
            <Table.Cell className={s.lastCol} rows={'2'}>
              <Button as={Link} to={`decks/${deck.id}/learn`} variant={'icon'}>
                <Icons iconId={'decksList-play'} />
              </Button>
              {me?.id === deck.author.id ? (
                <>
                  <EditDeckDialog deckId={deck.id} deckName={deck.name} onEditClick={editDeck} />
                  <DeleteDeckDialog
                    deckId={deck.id}
                    deckName={deck.name}
                    onDeleteClick={deleteDeck}
                  />
                </>
              ) : (
                ''
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
})
