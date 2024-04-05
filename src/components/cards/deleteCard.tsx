import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

import s from './deleteCard.module.scss'

type Props = {
  cardId: string
  onDeleteClick: (id: string) => void
}
export const DeleteCard = ({ cardId, onDeleteClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const deleteDeck = () => {
    onDeleteClick(cardId)
    setOpen(false)
  }

  return (
    <Modal
      iconId={'trash-outline'}
      isOpen={open}
      onChange={setOpen}
      title={'Delete card'}
      titleBtn={'Delete'}
      variantBtn={'icon'}
    >
      <div className={s.content}>
        <p>
          Do you really want to remove <strong>Эту карту</strong>?
        </p>
      </div>
      <div className={s.btn}>
        <Button onClick={() => setOpen(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={deleteDeck} variant={'primary'}>
          Delete Card
        </Button>
      </div>
    </Modal>
  )
}
