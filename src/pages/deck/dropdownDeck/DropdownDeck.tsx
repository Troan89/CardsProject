import { useNavigate } from 'react-router-dom'

import { Icons } from '@/assets/icons/Icons'
import { EditDeckDialog } from '@/components/decks/edit-deck-dialog'
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
  const navigate = useNavigate()
  const handlerLearn = () => {
    navigate(`/decks/${id}/learn`)
  }

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
        <DropdownMenuItem onClick={handlerLearn}>
          <Icons iconId={'play-circle-outline'} /> Learn
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
