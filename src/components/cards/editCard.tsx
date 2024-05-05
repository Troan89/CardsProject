import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import CardDemo from '@/assets/img/ReactCard.png'
import { ImageFrom } from '@/components/cards/ImageFrom'
import { VariantUploadImage } from '@/components/cards/createCard'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useGetCardQuery, useUpdateCardMutation } from '@/services/deck/deck.service'

import s from './createCard.module.css'

type Props = {
  cardId: string
}
export const EditCard = ({ cardId }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const { data: card } = useGetCardQuery({ id: cardId })
  const [updateCard] = useUpdateCardMutation()

  const [createQuestionValue, setCreateQuestionValue] = useState<string | undefined>(card?.question)
  const [createAnswerValue, setCreateAnswerValue] = useState<string | undefined>(card?.answer)
  const [uploadImageQuestion, setUploadImageQuestion] = useState<File | null>(null)
  const [uploadImageAnswer, setUploadImageAnswer] = useState<File | null>(null)

  useEffect(() => {
    setCreateQuestionValue(card?.question)
    setCreateAnswerValue(card?.answer)
  }, [card])

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

  const handlerEditCard = async () => {
    if (createQuestionValue && createAnswerValue) {
      const res = await updateCard({
        answer: createAnswerValue,
        answerImg: uploadImageAnswer,
        id: cardId,
        question: createQuestionValue,
        questionImg: uploadImageQuestion,
      })

      // @ts-ignore
      if (res.error.data.errorMessages[0].message) {
        // @ts-ignore
        toast.error(res.error.data.errorMessages[0].message)
      } else {
        setOpen(false)
      }
    }
  }

  return (
    <>
      <Modal
        iconId={'edit-2-outline'}
        isOpen={open}
        onChange={setOpen}
        title={'Edit Card'}
        titleBtn={'Edit Card'}
        variantBtn={'icon'}
      >
        <div className={s.wrapper}>
          <div className={s.block}>
            <Typography variant={'subtitle2'}>Question:</Typography>
            <ImageFrom
              handleChangeUploadImage={handleChangeUploadImage}
              img={card?.questionImg ? card?.questionImg : CardDemo}
              label={'Question'}
              onValueChange={handleQuestionValue}
              value={createQuestionValue}
            />
          </div>
          <div className={s.block}>
            <Typography variant={'subtitle2'}>Answer:</Typography>
            <ImageFrom
              handleChangeUploadImage={handleChangeUploadImage}
              img={card?.answerImg ? card?.answerImg : CardDemo}
              label={'Answer'}
              onValueChange={handleAnswerValue}
              value={createAnswerValue}
            />
          </div>
          <div className={s.footer}>
            <Button onClick={() => setOpen(false)} variant={'secondary'}>
              Cancel
            </Button>
            <Button onClick={handlerEditCard} variant={'primary'}>
              Edit Card
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
