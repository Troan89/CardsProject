import { useRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'
import { ImageUploader } from '@/components/ui/imageUploader/imageUploader'

import s from './avatarEditor.module.scss'

type Props = {
  updateAvatar: (avatar: File | null) => Promise<void>
}

export const AvatarEditor = ({ updateAvatar }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  const updateAvatarHandler = (avatar: File | null) => {
    updateAvatar(avatar)
  }

  const onClickAvatar = () => {
    ref.current?.click()
  }

  return (
    <>
      <ImageUploader
        ref={ref}
        setFile={updateAvatarHandler}
        trigger={
          <Button className={s.editButton} onClick={onClickAvatar}>
            <Icons className={s.icons} iconId={'edit-2-outline'} />
          </Button>
        }
      />
    </>
  )
}
