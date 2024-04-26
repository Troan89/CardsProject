import { useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { CreateDecks } from '@/services/decks/decks.types'

import s from './deckDialog.module.scss'

import { CheckBox } from '../../ui/checkBox'

type Props = {
  onClick: (data: CreateDecks) => void
}

export const DeckDialog = ({ onClick }: Props) => {
  const [createDeckValue, setCreateDeckValue] = useState<string>('')
  const [privatePack, setPrivatePack] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)
  const [file, setFile] = useState<File | null>(null)

  const handleValue = (e: string) => {
    setCreateDeckValue(e)
  }

  const handlePrivatePackChange = (checked: any) => {
    setPrivatePack(checked)
  }

  const handleCreateDeck = () => {
    onClick({ cover: file, isPrivate: privatePack, name: createDeckValue })
    setCreateDeckValue('')
    setPrivatePack(false)
    setOpen(false)
  }
  const handleCancelBtn = () => {
    setCreateDeckValue('')
    setOpen(false)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Add New Deck'}
      titleBtn={'Add New Deck'}
      variantBtn={'primary'}
    >
      <div className={s.input}>
        <TextField
          label={'Name pack'}
          onValueChange={handleValue}
          placeholder={'Name'}
          type={'text'}
          value={createDeckValue}
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
        <Button onClick={handleCancelBtn} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleCreateDeck} variant={'primary'}>
          Add New Pack
        </Button>
      </div>
    </Modal>
  )
}
