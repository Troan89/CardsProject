import { useState } from 'react'
import { useParams } from 'react-router'

import { ImageFrom } from '@/components/cards/ImageFrom'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useCreateCardMutation } from '@/services/deck/deck.service'

import s from './createCard.module.css'

import CardDemo from '../../assets/img/ReactCard.png'

export type VariantUploadImage = 'Answer' | 'Question'

type Props = {
  // onClick: (data: CreateCard) => void
}

export const CreateCardDialog = ({}: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const [createQuestionValue, setCreateQuestionValue] = useState<string>('')
  const [createAnswerValue, setCreateAnswerValue] = useState<string>('')
  const [uploadImageQuestion, setUploadImageQuestion] = useState<File | null>(null)
  const [uploadImageAnswer, setUploadImageAnswer] = useState<File | null>(null)

  const { deckId } = useParams()

  const [createCards] = useCreateCardMutation()

  const handleQuestionValue = (e: string) => {
    setCreateQuestionValue(e)
  }
  const handleAnswerValue = (e: string) => {
    setCreateAnswerValue(e)
  }

  const handleChangeUploadImage = (file: File | null, variant: VariantUploadImage) => {
    if (variant === 'Answer') {
      setUploadImageAnswer(file)
    } else {
      setUploadImageQuestion(file)
    }
  }

  const handlerCreateCard = () => {
    createCards({
      answer: createAnswerValue,
      answerImg: uploadImageAnswer,
      id: deckId,
      question: createQuestionValue,
      questionImg: uploadImageQuestion,
    })
    setOpen(false)
    setCreateQuestionValue('')
    setCreateAnswerValue('')
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Add New Card'}
      titleBtn={'Add New Card'}
      variantBtn={'primary'}
    >
      <div className={s.wrapper}>
        <div className={s.block}>
          <Typography variant={'subtitle2'}>Question:</Typography>
          <ImageFrom
            handleChangeUploadImage={handleChangeUploadImage}
            img={CardDemo}
            label={'Question'}
            onValueChange={handleQuestionValue}
            value={createQuestionValue}
          />
        </div>
        <div className={s.block}>
          <Typography variant={'subtitle2'}>Answer:</Typography>
          <ImageFrom
            handleChangeUploadImage={handleChangeUploadImage}
            img={CardDemo}
            label={'Answer'}
            onValueChange={handleAnswerValue}
            value={createAnswerValue}
          />
        </div>
        <div className={s.footer}>
          <Button onClick={() => setOpen(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={handlerCreateCard} variant={'primary'}>
            Add New Card
          </Button>
        </div>
      </div>
    </Modal>
  )
}
