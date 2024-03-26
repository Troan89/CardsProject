import { useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { ImageUpload } from '@/components/cards/ImageUpload'
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'
import { Modal } from '@/components/ui/modal'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './createCard.module.css'

import ReactCard from '../../assets/img/ReactCard.png'

export const CreateCard = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [createQuestionValue, setCreateQuestionValue] = useState<string>('')
  const [createAnswerValue, setCreateAnswerValue] = useState<string>('')

  const [imageQuestion, setImageQuestion] = useState<null | string>(ReactCard)
  const [imageAnswer, setImageAnswer] = useState<File | null | string>(ReactCard)

  // const handleImageChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target?.files?.[0]
  //   const reader = new FileReader()
  //
  //   reader.onload = () => {
  //     // @ts-ignore
  //     setImageQuestion(reader.result)
  //   }
  //   if (file) {
  //     reader.readAsDataURL(file) // Чтение изображения как Data URL
  //   }
  // }
  // const handleImageChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target?.files?.[0]
  //   const reader = new FileReader()
  //
  //   reader.onload = () => {
  //     // @ts-ignore
  //     setImageAnswer(reader.result)
  //   }
  //   if (file) {
  //     reader.readAsDataURL(file) // Чтение изображения как Data URL
  //   }
  // }

  const handleQuestionValue = (e: string) => {
    setCreateQuestionValue(e)
  }
  const handleAnswerValue = (e: string) => {
    setCreateAnswerValue(e)
  }

  return (
    <Modal
      isOpen={open}
      onChange={setOpen}
      title={'Add New Card'}
      titleBtn={'Add New Card'}
      variant={'primary'}
    >
      <div className={s.wrapper}>
        <div className={s.block}>
          <Typography variant={'subtitle2'}>Question:</Typography>
          <TextField
            label={'Question?'}
            onValueChange={handleQuestionValue}
            placeholder={'Name'}
            type={'text'}
            value={createQuestionValue}
          />
          {/*{imageQuestion && <img alt={'Preview'} src={imageQuestion} />}*/}
          {/*<input onChange={handleImageChangeQuestion} type={'file'} />*/}
          <ImageUpload />
          <ImageUploader
            setFile={handleQuestionValue}
            trigger={
              <Button variant={'secondary'}>
                <Icons iconId={'image-outline'} />
                Change Image
              </Button>
            }
          ></ImageUploader>
          {/*<Button variant={'secondary'}>*/}
          {/*  <Icons iconId={'image-outline'} />*/}
          {/*  Change Image*/}
          {/*</Button>*/}
        </div>
        <div className={s.block}>
          <Typography variant={'subtitle2'}>Answer:</Typography>
          <TextField
            label={'Answer?'}
            onValueChange={handleAnswerValue}
            placeholder={'Name'}
            type={'text'}
            value={createAnswerValue}
          />
          {/*{imageAnswer && <img alt={'Preview'} src={imageAnswer} />}*/}
          {/*<input onChange={handleImageChangeAnswer} type={'file'} />*/}
          <ImageUpload />
          {/*<Button variant={'secondary'}>*/}
          {/*  <Icons iconId={'image-outline'} />*/}
          {/*  Change Image*/}
          {/*</Button>*/}
        </div>
        <div className={s.footer}>
          <Button onClick={() => setOpen(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button variant={'primary'}>Add New Card</Button>
        </div>
      </div>
    </Modal>
  )
}
