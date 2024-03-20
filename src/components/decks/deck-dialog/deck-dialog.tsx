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

export const DeckDialog = ({onClick}: Props) => {
    const [createDeckValue, setCreateDeckValue] = useState<string>('')
    const [privatePack, setPrivatePack] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const handleValue = (e: string) => {
        setCreateDeckValue(e)
    }

    const handlePrivatePackChange = (checked: any) => {
        setPrivatePack(checked)
    }

    const handleCreateDeck = () => {
        onClick({name: createDeckValue, isPrivate: privatePack})
        setCreateDeckValue('')
        setPrivatePack(false)
        setOpen(false)
    }

    return (
        <Modal isOpen={open} onChange={setOpen} title={'Add New Deck'} titleBtn={'Add New Deck'}>
            <div className={s.input}>
                <TextField
                    label={'Name pack'}
                    onValueChange={handleValue}
                    placeholder={'Name'}
                    type={'text'}
                    value={createDeckValue}
                />
                <Button className={s.Button} fullWidth variant={'secondary'}>
                    Upload Image
                </Button>
                <Checkbox checked={privatePack} label={'Private pack'} onChange={handlePrivatePackChange}/>
            </div>
            <div className={s.btn}>
                <Button onClick={() => setOpen(false)} variant={'secondary'}>
                    Cancel
                </Button>
                <Button onClick={handleCreateDeck}>Add New Pack</Button>
            </div>
        </Modal>
    )
}
