import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/check-box'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { EditDecks } from '@/services/decks/decks.types'

import s from './edit-deck-dialog.module.scss'

type Props = {
  deckId: string
  deckName: string
  onEditClick: (data: EditDecks) => void
}
export const EditDeckDialog = ({ deckId, deckName, onEditClick }: Props) => {
  const [editDeckValue, setEditDeckValue] = useState<string>(deckName)
  const [privatePack, setPrivatePack] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const editDeck = () => {
    onEditClick({ id: deckId, isPrivate: privatePack, name: editDeckValue })
    setOpen(false)
  }

  const handleValue = (e: string) => {
    setEditDeckValue(e)
  }

  const handlePrivatePackChange = (checked: any) => {
    setPrivatePack(checked)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Edit deck'}
      titleIcon={'decksList-edit'}
      variant={'icon'}
    >
      <div className={s.content}>
        <p>
          Do you really want to edit <strong>{deckName}</strong>?
        </p>
      </div>
      <div className={s.input}>
        <TextField
          label={'Name pack'}
          onValueChange={handleValue}
          placeholder={'Name'}
          type={'text'}
          value={editDeckValue}
        />
        <Button className={s.Button} fullWidth variant={'secondary'}>
          Upload Image
        </Button>
        <Checkbox checked={privatePack} label={'Private pack'} onChange={handlePrivatePackChange} />
      </div>
      <div className={s.btn}>
        <Button onClick={() => setOpen(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={editDeck}>Edit deck</Button>
      </div>
    </Modal>
  )
}
