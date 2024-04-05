import { useEffect, useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { VariantUploadImage } from '@/components/cards/createCard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'
import { TextField } from '@/components/ui/textField'

import s from './imageForm.module.scss'

type Props = {
  handleChangeUploadImage: (file: File | null, variant: VariantUploadImage) => void
  img: string
  label: 'Answer' | 'Question'
  onValueChange: (e: string) => void
  value: string | undefined
}

export const ImageFrom = ({ handleChangeUploadImage, img, label, onValueChange, value }: Props) => {
  const [coverImg, setCoverImg] = useState<File | null>(null)
  const [currentImg] = useState(img)
  const isValidImage =
    coverImg !== null &&
    ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(coverImg.type)

  useEffect(() => {
    handleChangeUploadImage(coverImg, label)
  }, [coverImg])

  return (
    <Card className={s.wrapper}>
      <TextField
        label={`${label}?`}
        name={'name'}
        onValueChange={onValueChange}
        type={'text'}
        value={value}
      />
      {currentImg || isValidImage ? (
        <div>
          {isValidImage ? (
            <img alt={'cover'} src={URL.createObjectURL(coverImg)} />
          ) : (
            <img alt={'cover'} src={currentImg} />
          )}
          <div>
            <ImageUploader
              setFile={setCoverImg}
              trigger={
                <Button as={'span'} fullWidth variant={'secondary'}>
                  <Icons iconId={'image-outline'} />
                  Change Image
                </Button>
              }
            />
          </div>
        </div>
      ) : (
        <ImageUploader
          setFile={setCoverImg}
          trigger={
            <Button as={'span'} fullWidth variant={'secondary'}>
              Save change
            </Button>
          }
        />
      )}
    </Card>
  )
}
