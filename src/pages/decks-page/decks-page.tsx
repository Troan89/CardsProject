import {memo, useCallback, useEffect, useState} from 'react'
import { toast } from 'react-toastify'

import { Icons } from '@/assets/icons/Icons'
import { DecksTable } from '@/components/decks'
import { DeckDialog } from '@/components/decks/deck-dialog/deck-dialog'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import { TabSwitcher, TabType } from '@/components/ui/tabSwitcher'
import { Sort } from '@/components/ui/table/tableSort'
import { TextField } from '@/components/ui/textField'
import { Toast } from '@/components/ui/toast'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMaxMinCardsQuery,
  useUpdateDeckMutation,
} from '@/services/decks/decks.service'
import { CreateDecks, EditDecks } from '@/services/decks/decks.types'

import s from './decks-page.module.scss'

const tabs: TabType[] = [
  { content: <div></div>, title: 'My Cards', value: 'my card' },
  { content: <div></div>, title: 'All Cards', value: 'Tab 2' },
]

export const DecksPage = memo(() => {
  console.log('DecksPage')
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
  const [createDecks, { error: errorCreateDeck, isError: isErrorCreateDeck }] =
    useCreateDeckMutation()
  const [deleteDecks] = useDeleteDeckMutation()
  const [editDecks, { error: errorEditDeck, isError: isErrorEditDeck }] = useUpdateDeckMutation()

  useEffect(() => {
    if (maxMinCard) {
      setMaxCardCount(maxMinCard.max)
      setMinCardCount(maxMinCard.min)
    }
  }, [maxMinCard])

  const deleteDeck = useCallback((id: string) => {
    deleteDecks({id})
  },[deleteDecks])

  const createDeck = useCallback((data: CreateDecks) => {
    setPage(1)
    createDecks(data)
  }, [createDecks])

  const handleSearch = useCallback((name: string) => {
    setPage(1)
    setSearch(name)
  },[search])

  const editDeck = useCallback((data: EditDecks) => {
    editDecks(data)
  }, [editDecks])

  const sliderValue = maxMinCard ? [minCardCount, maxCardCount] : undefined

  const onChangeValueHandler = useCallback((newValue: number[]) => {
    setPage(1)
    setMinCardCount(newValue[0])
    setMaxCardCount(newValue[1])
  },[minCardCount, maxCardCount])

  const handleSort = useCallback((key: Sort) => {
    setPage(1)
    if (key && sortKey === key.sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key ? key.sortBy : undefined)
      setSortDirection('asc')
    }
  }, [sortDirection, sortKey])

  const handleSwitcher =useCallback((value: string) => {
    setPage(1)
    setSwitcher(value)
  },[switcher])

  const handleClearFilter = useCallback(() => {
    setSearch('')
    setSwitcher('')
    setSortKey('')
    setSortDirection('asc')
    setPage(1)
    setPerPageItem(10)
    setMinCardCount(0)
    setMaxCardCount(maxMinCard?.max ?? 100)
  },[])

  const [errorShown, setErrorShown] = useState(false);

  useEffect(() => {
    if (isError && !errorShown) {
      const errorMessage = error?.data.errorMessages[0]?.message || "Unknown error occurred";
      toast.error(`Error getting decks: ${errorMessage}`);
      setErrorShown(true);
    }
    if (isErrorCreateDeck && !errorShown) {
      const errorMessage = errorCreateDeck?.data.errorMessages[0]?.message || "Unknown error occurred";
      toast.error(`Error creating deck: ${errorMessage}`);
      setErrorShown(true);
    }
    if (isErrorEditDeck && !errorShown) {
      const errorMessage = errorEditDeck?.data.errorMessages[0]?.message || "Unknown error occurred";
      toast.error(`Error editing deck: ${errorMessage}`);
      setErrorShown(true);
    }
  }, [isErrorCreateDeck, errorCreateDeck, errorShown, isErrorEditDeck, errorEditDeck]);

  if (isLoading || !maxMinCard || isFetching) {
    return <Spinner />
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
      <Toast />
    </div>
  )
})
