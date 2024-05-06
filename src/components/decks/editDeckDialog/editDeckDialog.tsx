import { useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { EditDecks } from '@/services/decks/decks.types'

import s from './editDeckDialog.module.scss'

import { CheckBox } from '../../ui/checkBox'

type Props = {
  deckId: string
  deckName: string
  onChange?: (open: boolean) => void
  onEditClick: (data: EditDecks) => void
  open?: boolean
}
export const EditDeckDialog = ({ deckId, deckName, onEditClick, open, ...rest }: Props) => {
  const [editDeckValue, setEditDeckValue] = useState<string>(deckName)
  const [privatePack, setPrivatePack] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)

  const editDeck = () => {
    onEditClick({ cover: file, id: deckId, isPrivate: privatePack, name: editDeckValue })
    rest.onChange?.(false)
  }

  const handleValue = (e: string) => {
    setEditDeckValue(e)
  }

  const handlePrivatePackChange = (checked: any) => {
    setPrivatePack(checked)
  }

  // console.log('EditDeckDialog', open)

  return (
    <Modal
      iconId={'decksList-edit'}
      isOpen={open}
      title={'Edit deck'}
      variantBtn={'icon'}
      {...rest}
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
        <div className={s.Button}>
          <ImageUploader
            setFile={(img: File | null) => setFile(img)}
            trigger={
              <Button as={'span'} fullWidth variant={'secondary'}>
                <Icons iconId={'upload_image'} /> Upload image
              </Button>
            }
          />
        </div>
        <CheckBox checked={privatePack} label={'Private pack'} onChange={handlePrivatePackChange} />
      </div>
      <div className={s.btn}>
        <Button onClick={() => rest.onChange?.(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={editDeck} variant={'primary'}>
          Edit deck
        </Button>
      </div>
    </Modal>
  )
}
