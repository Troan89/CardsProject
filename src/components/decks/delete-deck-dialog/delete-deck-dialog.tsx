import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'

import s from './delete-deck-dialog.module.scss'

type Props = {
  deckId: string
  deckName?: string
  onDeleteClick: (id: string) => void
}
export const DeleteDeckDialog = ({ deckId, deckName, onDeleteClick }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  const deleteDeck = () => {
    onDeleteClick(deckId)
    setOpen(false)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Delete deck'}
      titleIcon={'decksList-delete'}
      variant={'icon'}
    >
      <div className={s.content}>
        <p>
          Do you really want to remove <strong>{deckName}</strong>?
        </p>
        <p>All cards will be deleted.</p>
      </div>
      <div className={s.btn}>
        <Button onClick={() => setOpen(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={deleteDeck}>Delete deck</Button>
      </div>
    </Modal>
  )
}
