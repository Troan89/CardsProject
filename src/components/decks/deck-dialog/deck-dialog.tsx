import {useState} from 'react'
import {Button} from '@/components/ui/button'
import {Checkbox} from '@/components/ui/check-box'
import {Modal} from '@/components/ui/modal'
import {TextField} from '@/components/ui/textField'
import {CreateDecks} from '@/services/decks/decks.types'

import s from './deck-dialog.module.scss'

type Props = {
  onClick: (data: CreateDecks) => void
}

export const DeckDialog = ({ onClick }: Props) => {
  const [createDeckValue, setCreateDeckValue] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const handleValue = (e:string) => {
    setCreateDeckValue(e)
  }

  return (
    <Modal isOpen={open} onChange={setOpen} title={'Add New Deck'}>
        <div className={s.input}>
            <TextField
                label={'Name pack'}
                onValueChange={handleValue}
                placeholder={'Name'}
                type={'text'}
                value={createDeckValue}
            />
            <Button className={s.Button}  fullWidth>Upload Image</Button>
            <Checkbox label={'Private pack'} />
        </div>
      <div className={s.btn}>
        <Button variant={'secondary'} onClick={()=>setOpen(false)} >Cancel</Button>
        <Button
          onClick={() => onClick({ name: createDeckValue })}
        >
          Add New Pack
        </Button>
      </div>
    </Modal>
  )
}
