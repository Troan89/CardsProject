import { useState } from 'react'
import { useParams } from 'react-router'

import { BackButton } from '@/components/ui/backButton/backButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Options, RadioGroup } from '@/components/ui/radioGroup'
import { Typography } from '@/components/ui/typography'
import { useGetOneDeckQuery, useGetRandomCardLearnQuery } from '@/services/decks/decks.service'

import s from './learnCards.module.scss'

const radio: Options[] = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Сonfused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]

export const LearnCards = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [countAnswer, setCountAnswer] = useState<number>(10)
  const [nextQuestion, setNextQuestion] = useState<string>()

  const { deckId } = useParams()

  const { data: deck } = useGetOneDeckQuery({ id: deckId || '' })
  const { data } = useGetRandomCardLearnQuery({ id: deckId || '', previousCardId: nextQuestion })

  console.log(data)

  const handleNextQuestion = () => {
    setOpen(false)
    setNextQuestion(data?.id)
  }

  return (
    <div className={s.root}>
      <div className={s.backBtn}>
        <BackButton text={'Back to Decks List'} />
      </div>
      <div className={s.card}>
        <Card className={s.modal}>
          <Typography className={s.name} variant={'h1'}>
            Learn &quot;{deck?.name}&quot;
          </Typography>
          <Typography variant={'body1'}>Question: {data?.question}</Typography>
          {data?.questionImg && <img alt={'question Image'} src={data?.questionImg} />}
          <Typography className={s.countAnswer} variant={'body2'}>
            Количество попыток ответов на вопрос: {countAnswer}
          </Typography>
          {!open && (
              <Button fullWidth onClick={() => setOpen(true)} variant={'primary'}>
                Show Answer
              </Button>
          )}
          {open && (
              <div>
                <Typography className={s.answer} variant={'body1'}>Answer: {data?.answer}</Typography>
                {data?.answerImg && <img alt={'answer Image'} src={data?.answerImg} />}
                <Typography className={s.rateYourself} variant={'body1'}>Rate yourself:</Typography>
                <RadioGroup options={radio}></RadioGroup>
                <Button className={s.buttonNext} fullWidth onClick={handleNextQuestion} variant={'primary'}>
                  Next Question
                </Button>
              </div>
          )}
        </Card>
      </div>
    </div>
  )
}
