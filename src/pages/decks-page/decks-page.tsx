import { useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { DecksTable } from '@/components/decks'
import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { TabSwitcher, TabType } from '@/components/ui/tabSwitcher'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation, useDeleteDeckMutation, useGetDecksQuery } from '@/services/baseApi'

import s from './decks-page.module.scss'

const tabs: TabType[] = [
  { content: <div></div>, title: 'My Cards', value: 'Tab 1' },
  { content: <div></div>, title: 'All Cards', value: 'Tab 2' },
]

export const DecksPage = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [perPageItem, setPerPageItem] = useState<number | string>(10)

  const { data, error, isError, isLoading } = useGetDecksQuery({
    currentPage: page,
    itemsPerPage: perPageItem,
    name: search,
  })
  const [createDeck] = useCreateDeckMutation()
  const [deleteDecks] = useDeleteDeckMutation()

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>{JSON.stringify(error)}</div>
  }

  const deleteDeck = (id: string) => {
    deleteDecks({ id })
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button
          onClick={() => {
            createDeck({ name: 'New decks yo' })
          }}
        >
          Add New Deck
        </Button>
      </div>
      <div className={s.filteredEl}>
        <TextField
          className={s.input}
          onValueChange={setSearch}
          placeholder={'Input search'}
          type={'text'}
        />
        <div>
          <Typography variant={'body2'}>Show decks cards</Typography>
          <TabSwitcher tabs={tabs} />
        </div>
        <div>
          <Typography variant={'body2'}>Number of cards</Typography>
          <Slider value={[0, 100]} />
        </div>
        <Button variant={'secondary'}>
          <Icons iconId={'decksList-delete'} /> Clear Filter
        </Button>
      </div>
      <DecksTable decks={data?.items} onDeleteClick={deleteDeck} onEditClick={() => {}} />
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
