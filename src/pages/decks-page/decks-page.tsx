import { useEffect, useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { DecksTable } from '@/components/decks'
import { DeckDialog } from '@/components/decks/deck-dialog/deck-dialog'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher, TabType } from '@/components/ui/tabSwitcher'
import { Sort } from '@/components/ui/table/tableSort'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import { CreateDecks, EditDecks } from '@/services/decks/decks.types'

import s from './decks-page.module.scss'

import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMaxMinCardsQuery,
  useUpdateDeckMutation,
} from '../../services/decks/decks.service'

const tabs: TabType[] = [
  { content: <div></div>, title: 'My Cards', value: 'my card' },
  { content: <div></div>, title: 'All Cards', value: 'Tab 2' },
]

export const DecksPage = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [perPageItem, setPerPageItem] = useState<number | string>(10)
  const [sortKey, setSortKey] = useState<string | undefined>('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [switcher, setSwitcher] = useState('')

  const { data: maxMinCard, isFetching } = useGetMaxMinCardsQuery()
  const [minCardCount, setMinCardCount] = useState<number>(maxMinCard?.min ?? 0)
  const [maxCardCount, setMaxCardCount] = useState<number>(maxMinCard?.max ?? 100)

  const { data: me } = useGetMeQuery()

  const { data, error, isError, isLoading } = useGetDecksQuery({
    authorId: switcher === tabs[0].value ? me?.id : undefined,
    currentPage: page,
    itemsPerPage: perPageItem,
    maxCardsCount: maxCardCount,
    minCardsCount: minCardCount,
    name: search,
    orderBy: sortKey ? `${sortKey}-${sortDirection}` : undefined,
  })
  const [createDecks] = useCreateDeckMutation()
  const [deleteDecks] = useDeleteDeckMutation()
  const [editDecks] = useUpdateDeckMutation()

  useEffect(() => {
    if (maxMinCard) {
      setMaxCardCount(maxMinCard.max)
      setMinCardCount(maxMinCard.min)
    }
  }, [maxMinCard])

  if (isLoading || !maxMinCard || isFetching) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>
  }

  const deleteDeck = (id: string) => {
    deleteDecks({ id })
  }

  const createDeck = (data: CreateDecks) => {
    setPage(1)
    createDecks(data)
  }

  const handleSearch = (name: string) => {
    setPage(1)
    setSearch(name)
  }

  const editDeck = (data: EditDecks) => {
    editDecks(data)
  }

  const sliderValue = maxMinCard ? [minCardCount, maxCardCount] : undefined

  const onChangeValueHandler = (newValue: number[]) => {
    setPage(1)
    setMinCardCount(newValue[0])
    setMaxCardCount(newValue[1])
  }

  const handleSort = (key: Sort) => {
    setPage(1)
    if (key && sortKey === key.sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key ? key.sortBy : undefined)
      setSortDirection('asc')
    }
  }

  const handleSwitcher = (value: string) => {
    setPage(1)
    setSwitcher(value)
  }

  const handleClearFilter = () => {
    setSearch('')
    setSwitcher('')
    setSortKey('')
    setSortDirection('asc')
    setPage(1)
    setPerPageItem(10)
    setMinCardCount(0)
    setMaxCardCount(maxMinCard?.max ?? 100)
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
          onValueChange={handleSearch}
          placeholder={'Input search'}
          type={'text'}
          value={search}
        />
        <div className={s.tab}>
          <TabSwitcher
            defaultValue={tabs[1]?.value}
            onValueChange={handleSwitcher}
            tabs={tabs}
            title={'Show decks cards'}
            value={switcher}
          />
        </div>
        <div className={s.slider}>
          <Typography variant={'body2'}>Number of cards</Typography>
          <Slider max={maxMinCard?.max} onValueChange={onChangeValueHandler} value={sliderValue} />
        </div>
        <Button onClick={handleClearFilter} variant={'secondary'}>
          <Icons iconId={'decksList-delete'} /> <span>Clear Filter</span>
        </Button>
      </div>
      <DecksTable
        decks={data?.items}
        onDeleteClick={deleteDeck}
        onEditClick={editDeck}
        onSort={handleSort}
        sort={{ direction: sortDirection, sortBy: sortKey }}
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
