import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Icons } from '@/assets/icons/Icons'
import { EditDeckDialog } from '@/components/decks/editDeckDialog'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'
import { useUpdateDeckMutation } from '@/services/decks/decks.service'
import { EditDecks } from '@/services/decks/decks.types'

type Props = {
  handleDeleteClickDeck: () => void
  id: string
  name: string
}

export const DropdownDeck = ({ handleDeleteClickDeck, id, name }: Props) => {
  const [editDecks] = useUpdateDeckMutation()

  const [open, setOpen] = useState<boolean>(false)

  const editDeck = (data: EditDecks) => {
    editDecks(data)
  }

  const handleSetupModalState = (open: boolean) => {
    setOpen(open)
  }

  return (
    <>
      <DropdownMenu
        onOpenChange={() => {
          setOpen(true)
        }}
        open={open}
      >
        <DropdownMenuTrigger>
          <Icons iconId={'more-vertical-outline'} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Button as={Link} to={`/decks/${id}/learn`} variant={'icon'}>
              <Icons iconId={'play-circle-outline'} /> Learn
            </Button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          {/*<DropdownMenuItem asChild onClick={e => e.preventDefault()}>*/}
          <DropdownMenuItem>
            <EditDeckDialog
              deckId={id}
              deckName={name}
              onChange={handleSetupModalState}
              onEditClick={editDeck}
              open={open}
            />{' '}
            Edit
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteClickDeck}>
            <Icons iconId={'trash-outline'} /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
