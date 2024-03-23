import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

import s from './deleteCard.module.css'

type Props = {
  cardId: string
  cardName?: string
  onDeleteClick: (id: string) => void
}
export const DeleteCard = ({ cardId, cardName = ' iii', onDeleteClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const deleteDeck = () => {
    onDeleteClick(cardId)
    setOpen(false)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Delete card'}
      titleBtn={'Delete'}
      titleIcon={'trash-outline'}
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
        <Button onClick={deleteDeck}>Delete Card</Button>
      </div>
    </Modal>
  )
}
