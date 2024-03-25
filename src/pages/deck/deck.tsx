import { useState } from 'react'
import { useParams } from 'react-router'

import { DeleteCard } from '@/components/cards/deleteCard'
import { EditCard } from '@/components/cards/editCard'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { Column, Sort, TableSort } from '@/components/ui/table/tableSort'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardQuery,
} from '@/services/deck/deck.service'
import { Card } from '@/services/deck/deck.types'

import s from '@/pages/decks-page/decks-page.module.scss'
import {useGetOneDeckQuery} from "@/services/decks/decks.service";

const columns: Column[] = [
  {
    column: 1,
    sortBy: 'question',
    title: 'Question',
  },
  {
    column: 2,
    sortBy: 'answer',
    title: 'Answer',
  },
  {
    column: 3,
    sortBy: 'lastUpdated',
    title: 'Last Updated',
  },
  {
    column: 4,
    sortBy: 'grade',
    title: 'Grade',
  },
  {
    column: 5,
    sortBy: 'action',
    title: '',
  },
]

type Props = {
  decks?: Card[] | undefined
  onSort?: (key: Sort) => void
  sort?: Sort
}

export const Deck = ({ onSort, sort }: Props) => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [perPageItem, setPerPageItem] = useState<number | string>(10)

  const { deckId } = useParams()

  const {data: deck} = useGetOneDeckQuery({id: deckId || ""})

  const [createCards] = useCreateCardMutation()
  const [deleteCard] = useDeleteCardMutation()

  const { data } = useGetCardQuery({
    id: deckId || '',
    currentPage: page,
    itemsPerPage: perPageItem,
    question: search,
  })

  const createCard = () => {
    createCards({ answer: '1+1+1+1', id: String(deckId), question: 'my deck' })
  }
  const handleDeleteClick = (id: string) => {
    deleteCard({ id })
  }
  const handleEditClick = (id: string) => {
    console.log(id)
  }

  return (
    <div>
      <Typography variant={'large'}>{deck?.name}</Typography>
      <Button onClick={createCard}>add</Button>
      <TextField onValueChange={setSearch} placeholder={'Input search'} type={'text'} />
      <Table.Root>
        <TableSort columns={columns} onSort={onSort} sort={sort}></TableSort>
        <Table.Body>
          {data?.items.map((deck, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>
                  <Typography variant={'body2'}>{deck.question}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={'body2'}>{deck.answer}</Typography>
                </Table.Cell>
                <Table.Cell>
                  <Typography variant={'body2'}>
                    {new Date(deck.updated).toLocaleDateString('ru-RU')}
                  </Typography>
                </Table.Cell>
                <Table.Cell>
                  <Rating value={deck.grade} />
                </Table.Cell>
                <Table.Cell>
                  <EditCard cardId={deck.id} onEditClick={handleEditClick} />
                  <DeleteCard cardId={deck.id} onDeleteClick={handleDeleteClick} />
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table.Root>
      {data && (
        <div className={s.pagination}>
          <Pagination
            count={data.pagination.totalPages}
            limit={data.pagination.itemsPerPage}
            onChange={setPage}
            onPerPageChange={setPerPageItem}
            page={data.pagination.currentPage}
            perPage={data.pagination.itemsPerPage}
            perPageOptions={[5, 10, 20, 50, 100]}
          />
        </div>
      )}
    </div>
  )
}
