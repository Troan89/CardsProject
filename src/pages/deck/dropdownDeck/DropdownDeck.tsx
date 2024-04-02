import { useNavigate } from 'react-router-dom'

import { Icons } from '@/assets/icons/Icons'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown'

type Props = {
  handleDeleteClickDeck: () => void
  id: string | undefined
}

export const DropdownDeck = ({ handleDeleteClickDeck, id }: Props) => {
  const navigate = useNavigate()
  const handlerLearn = () => {
    navigate(`decks/${id}/learn`)
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
          <Icons iconId={'edit-2-outline'} /> Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteClickDeck}>
          <Icons iconId={'trash-outline'} /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
