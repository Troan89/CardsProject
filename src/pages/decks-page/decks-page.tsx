import { useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { DecksTable } from '@/components/decks'
import { DeckDialog } from '@/components/decks/deck-dialog/deck-dialog'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher, TabType } from '@/components/ui/tabSwitcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMaxMinCardsQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import { CreateDecks, EditDecks } from '@/services/decks/decks.types'

import s from './decks-page.module.scss'
import {Sort} from "@/components/ui/table/tableSort";

const tabs: TabType[] = [
  { content: <div>My Cards</div>, title: 'My Cards', value: 'Tab 1' },
  { content: <div>All Cards</div>, title: 'All Cards', value: 'Tab 2' },
]

export const DecksPage = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [perPageItem, setPerPageItem] = useState<number | string>(10)
  const [minMaxCard, setMinMaxCard] = useState<number[]>([0, 100])
  const [sortKey, setSortKey] = useState<string | undefined>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const { data, error, isError, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: perPageItem,
    maxCardsCount: minMaxCard[1],
    minCardsCount: minMaxCard[0],
    name: search,
    orderBy: sortKey ? `${sortKey}-${sortDirection}` : undefined,
  })
  const [createDecks] = useCreateDeckMutation()
  const [deleteDecks] = useDeleteDeckMutation()
  const [editDecks] = useUpdateDeckMutation()
  const { data: maxMinCard } = useGetMaxMinCardsQuery()


  console.log(`${sortKey}-${sortDirection}`)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>
  }

  const deleteDeck = (id: string) => {
    deleteDecks({ id })
  }

  const createDeck = (data: CreateDecks) => {
    createDecks(data)
  }

  const editDeck = (data: EditDecks) => {
    editDecks(data)
  }

  const sliderValue = maxMinCard ? [maxMinCard.min, maxMinCard.max] : []

  const onChangeValueHandler = (newValue: number[]) => {
    setMinMaxCard(newValue)
  }

  const handleSort = (key: Sort) => {
    if (key && sortKey === key.sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key ? key.sortBy : undefined)
      setSortDirection('asc')
    }
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Typography variant={'h1'}>Decks list</Typography>
        <DeckDialog onClick={createDeck} />
      </div>
      <div className={s.filteredEl}>
        <TextField
          className={s.input}
          onValueChange={setSearch}
          placeholder={'Input search'}
          type={'text'}
        />
        <div className={s.tab}>
          <TabSwitcher tabs={tabs} title={'Show decks cards'} />
        </div>
        <div className={s.slider}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <Slider
            ariaLabelMax={String(minMaxCard[1])}
            ariaLabelMin={String(minMaxCard[0])}
            onValueChange={onChangeValueHandler}
            value={sliderValue}
          />
        </div>
        <div className={s.btn}>
          <Button variant={'secondary'}>
            <Icons iconId={'decksList-delete'} /> Clear Filter
          </Button>
        </div>
      </div>
      <DecksTable
        decks={data?.items}
        onDeleteClick={deleteDeck}
        onEditClick={editDeck}
        onSort={handleSort}
        sort={{ sortBy: sortKey, direction: sortDirection}}
      />
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
