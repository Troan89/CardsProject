import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import CardDemo from '@/assets/img/ReactCard.png'
import { ImageFrom } from '@/components/cards/ImageFrom'
import { VariantUploadImage } from '@/components/cards/createCard'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { Toast } from '@/components/ui/toast'
import { Typography } from '@/components/ui/typography'
import { useGetCardQuery, useUpdateCardMutation } from '@/services/deck/deck.service'
import { CreateUpdateCard } from '@/services/deck/deck.types'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createCard.module.css'

type Props = {
  cardId: string
}

const updateCardSchema = z.object({
  answer: z.optional(z.string().min(3).max(30)),
  question: z.optional(z.string().min(3).max(30)),
})

type EditCardFormValues = z.infer<typeof updateCardSchema>

export const EditCard = ({ cardId }: Props) => {
  const [open, setOpen] = useState<boolean>(false)
  const { data: card } = useGetCardQuery({ id: cardId })
  const [updateCard] = useUpdateCardMutation()

  const [createQuestionValue, setCreateQuestionValue] = useState<string | undefined>(card?.question)
  const [createAnswerValue, setCreateAnswerValue] = useState<string | undefined>(card?.answer)
  const [uploadImageQuestion, setUploadImageQuestion] = useState<File | null>(null)
  const [uploadImageAnswer, setUploadImageAnswer] = useState<File | null>(null)

  const methods = useForm<EditCardFormValues>({
    defaultValues: { answer: card?.answer ?? '', question: card?.question ?? '' },
    resolver: zodResolver(updateCardSchema),
  })
  const { handleSubmit, reset } = methods

  useEffect(() => {
    if (card) {
      setCreateQuestionValue(card.question)
      setCreateAnswerValue(card.answer)
      reset({ answer: card.answer, question: card.question })
    }
  }, [open, card, reset])

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

  const onSubmit = async (data: EditCardFormValues) => {
    try {
      const formData = new FormData()

      if (data.question) {
        formData.append('question', data.question)
      }
      if (data.answer) {
        formData.append('answer', data.answer)
      }
      if (uploadImageQuestion) {
        formData.append('questionImg', uploadImageQuestion)
      } else {
        formData.append('questionImg', card?.questionImg ?? '')
      }
      if (uploadImageAnswer) {
        formData.append('answerImg', uploadImageAnswer)
      } else {
        formData.append('answerImg', card?.answerImg ?? '')
      }

      const updateCardHandler = updateCard({
        id: cardId ?? '',
        ...data,
      } as CreateUpdateCard).unwrap()

      await toast.promise(updateCardHandler, {
        error: 'Error updating card',
        pending: 'Updating card...',
        success: 'Card updated successfully!',
      })

      reset()
      setOpen(false)
    } catch (error) {
      console.error('Error updating card:', error)
      toast.error('An error occurred while updating the card.')
    }
  }

  if (!card) {
    return null // Render loading state or handle the case when card is not available
  }

  return (
    <FormProvider {...methods}>
      <Modal
        iconId={'edit-2-outline'}
        isOpen={open}
        onChange={setOpen}
        title={'Edit Card'}
        titleBtn={'Edit Card'}
        variantBtn={'icon'}
      >
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.block}>
            <Typography variant={'subtitle2'}>Question:</Typography>
            <ImageFrom
              handleChangeUploadImage={handleChangeUploadImage}
              img={card.questionImg ? card.questionImg : CardDemo}
              label={'Question'}
              onValueChange={handleQuestionValue}
              value={createQuestionValue}
            />
          </div>
          <div className={s.block}>
            <Typography variant={'subtitle2'}>Answer:</Typography>
            <ImageFrom
              handleChangeUploadImage={handleChangeUploadImage}
              img={card.answerImg ? card.answerImg : CardDemo}
              label={'Answer'}
              onValueChange={handleAnswerValue}
              value={createAnswerValue}
            />
          </div>
          <div className={s.actions}>
            <Button type={'submit'}>Save</Button>
          </div>
        </form>
      </Modal>
      <Toast />
    </FormProvider>
  )
}
