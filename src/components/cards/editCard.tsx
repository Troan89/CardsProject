import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

import s from './deleteCard.module.css'

type Props = {
  cardId: string
  cardName?: string
  onEditClick: (id: string) => void
}
export const EditCard = ({ cardId, cardName = ' iii', onEditClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const deleteDeck = () => {
    onEditClick(cardId)
    setOpen(false)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Edit card'}
      titleBtn={'Edit'}
      titleIcon={'edit-2-outline'}
      variant={'icon'}
    >
      <div className={s.content}>
        <p>
          Do you really want to remove <strong>{cardName}</strong>?
        </p>
        <p>All cards will be deleted.</p>
      </div>
      <div className={s.btn}>
        <Button onClick={() => setOpen(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={deleteDeck}>Edit Card</Button>
      </div>
    </Modal>
  )
}
