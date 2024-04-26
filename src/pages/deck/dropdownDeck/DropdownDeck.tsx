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

  const editDeck = (data: EditDecks) => {
    editDecks(data)
  }

  return (
    <DropdownMenu>
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
        <DropdownMenuItem>
          <EditDeckDialog deckId={id} deckName={name} onEditClick={editDeck} /> Edit
          {/*<Icons iconId={'edit-2-outline'} /> */}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteClickDeck}>
          <Icons iconId={'trash-outline'} /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
