import { ChangeEvent, useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'

import ReactCard from '../../assets/img/ReactCard.png'

export const ImageUpload = () => {
  const [image, setImage] = useState<null | string>(ReactCard)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const reader = new FileReader()

    reader.onload = () => {
      setImage(reader.result as string)
    }

    file && reader.readAsDataURL(file) // Чтение изображения как Data URL
  }

  return (
    <div>
      {image && <img alt={'Preview'} src={image} />}

      <Button variant={'secondary'}>
        <Icons iconId={'image-outline'} />
        <input onChange={handleImageChange} type={'file'} />
        Change Image
      </Button>
    </div>
  )
}
