import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'
import { TextField } from '@/components/ui/textField'

type Props = {
  img: string
}

export const TestImageUploader = ({ img }: Props) => {
  const [coverImg, setCoverImg] = useState<File | null>(null)
  const [currentImg, setCurrentImg] = useState(img)
  const isValidImage =
    coverImg !== null &&
    ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(coverImg.type)

  const CloseHandler = () => {
    setCoverImg(null)
  }

  const removeImg = () => {
    setCurrentImg('')
    setCoverImg(null)
  }

  return (
    <Card style={{ width: '420px' }}>
      <TextField name={'name'} type={'text'} />
      {currentImg || isValidImage ? (
        <div>
          {currentImg && !isValidImage && (
            <img alt={'cover'} src={currentImg} style={{ margin: '0 auto', width: '320px' }} />
          )}
          {isValidImage && (
            <img
              alt={'cover'}
              src={URL.createObjectURL(coverImg)}
              style={{ margin: '0 auto', width: '320px' }}
            />
          )}
          <div>
            <Button onClick={removeImg} variant={'secondary'}>
              delete
            </Button>
            <ImageUploader
              setFile={setCoverImg}
              trigger={
                <Button as={'span'} fullWidth variant={'secondary'}>
                  cover image
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
              upload image
            </Button>
          }
        />
      )}
      <div>
        <Button onClick={CloseHandler} type={'reset'} variant={'secondary'}>
          Cancel
        </Button>
        <Button type={'submit'} variant={'primary'}>
          Save changes
        </Button>
      </div>
    </Card>
  )
}
