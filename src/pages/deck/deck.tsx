import { useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'

import pic from '@/assets/img/imgreplace.jpg'
import { CreateCardDialog } from '@/components/cards/createCard'
import { DeleteCard } from '@/components/cards/deleteCard'
import { EditCard } from '@/components/cards/editCard'
import { BackButton } from '@/components/ui/backButton/backButton'
import { PageWrapper } from '@/components/ui/pageWrapper'
import { Pagination } from '@/components/ui/pagination'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { Column, Sort, TableSort } from '@/components/ui/table/tableSort'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { DropdownDeck } from '@/pages/deck/dropdownDeck/DropdownDeck'
import { ROUTES } from '@/router/router'
import { useGetMeQuery } from '@/services/auth'
import { useDeleteCardMutation, useGetCardsQuery } from '@/services/deck/deck.service'
import { Card } from '@/services/deck/deck.types'
import { useDeleteDeckMutation, useGetOneDeckQuery } from '@/services/decks/decks.service'

import s from './deck.module.scss'

const columns: Column[] = [
  {
    column: '3',
    sortBy: 'question',
    title: 'Question',
  },
  {
    column: '3',
    sortBy: 'answer',
    title: 'Answer',
  },
  {
    column: '1',
    sortBy: 'lastUpdated',
    title: 'Last Updated',
  },
  {
    column: '2',
    sortBy: 'grade',
    title: 'Grade',
  },
  {
    column: '1',
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
  const navigate = useNavigate()

  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [perPageItem, setPerPageItem] = useState<number | string>(10)

  const { deckId } = useParams()

  const { data: deck } = useGetOneDeckQuery({ id: deckId || '' })
  const { data: me } = useGetMeQuery()
  const [deleteDeck] = useDeleteDeckMutation()

  const [deleteCard] = useDeleteCardMutation()

  const { data } = useGetCardsQuery({
    currentPage: page,
    id: deckId || '',
    itemsPerPage: perPageItem,
    question: search,
  })

  const handleDeleteClickCard = (id: string) => {
    deleteCard({ id })
  }
  const handleDeleteClickDeck = () => {
    debugger
    if (deck?.id && deck?.userId === me?.id) {
      deleteDeck({ id: deck.id })
      navigate(ROUTES.base)
    }
  }

  return (
    <PageWrapper className={s.wrapper}>
      <BackButton className={s.backButton} text={'Back to  Decks List'} />
      <div className={s.header}>
        <div>
          <div className={s.menu}>
            <Typography variant={'h1'}>{deck?.name}</Typography>
            <DropdownDeck
              handleDeleteClickDeck={handleDeleteClickDeck}
              id={deckId || ''}
              name={deck?.name || ''}
            />
          </div>
          {deck?.cover ? <img alt={deck.name} src={deck.cover} /> : <img alt={'react'} src={pic} />}
        </div>
        <CreateCardDialog />
      </div>

      <TextField onValueChange={setSearch} placeholder={'Input search'} type={'search'} />
      <Table.Root>
        <TableSort columns={columns} onSort={onSort} sort={sort}></TableSort>
        <Table.Body>
          {data?.items.map((card, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell className={s.questionAnswerStyle} rows={'3'}>
                  <Typography variant={'body2'}>
                    {card.questionImg ? (
                      <img alt={card.question} src={card.questionImg} />
                    ) : (
                      card.question
                    )}
                  </Typography>
                </Table.Cell>
                <Table.Cell className={s.questionAnswerStyle} rows={'3'}>
                  <Typography variant={'body2'}>
                    {card.answerImg ? <img alt={card.answer} src={card.answerImg} /> : card.answer}
                  </Typography>
                </Table.Cell>
                <Table.Cell rows={'1'}>
                  <Typography variant={'body2'}>
                    {new Date(card.updated).toLocaleDateString('ru-RU')}
                  </Typography>
                </Table.Cell>
                <Table.Cell rows={'2'}>
                  <Rating value={card.grade} />
                </Table.Cell>
                <Table.Cell rows={'1'}>
                  {me?.id === card.userId ? (
                    <>
                      <EditCard cardId={card.id} />
                      <DeleteCard cardId={card.id} onDeleteClick={handleDeleteClickCard} />
                    </>
                  ) : null}
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
    </PageWrapper>
  )
}
