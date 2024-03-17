import { useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Avatar } from '@/components/ui/avatar/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { TextField } from '@/components/ui/textField'
import { Typography } from '@/components/ui/typography'

import s from './personalInformation.module.css'

import AvatarDemo from '../../../assets/img/avatarDemo.jpeg'
type Props = {
  email: string
  name: string
}
export const PersonalInformation = (props: Props) => {
  const { email, name } = props
  const [editMode, setEditMode] = useState(false)
  const [nameValue, setNameValue] = useState(name)

  const onChangeEditMode = (value: boolean) => {
    setEditMode(value)
  }
  const onChangeName = (value: string) => {
    setNameValue(value)
  }

  return (
    <Card className={s.cardWrapper}>
      <div className={s.infoWrapper}>
        <Typography variant={'h1'}>Personal Information</Typography>
        <div>
          <Avatar className={s.avatar} height={'96px'} src={AvatarDemo} width={'96px'} />
          <button className={s.editButton}>
            <Icons className={s.icons} iconId={'edit-2-outline'} />
          </button>
        </div>

        {editMode ? (
          <div className={s.content}>
            <div className={s.editInput}>
              <TextField
                label={'Nickname'}
                onBlur={() => onChangeEditMode(false)}
                onValueChange={onChangeName}
                type={'text'}
                value={nameValue}
              />
            </div>
            <Button fullWidth variant={'primary'}>
              Save Changes
            </Button>
          </div>
        ) : (
          <div className={s.content}>
            <Typography variant={'h2'}>
              {nameValue}{' '}
              <button className={s.editButton} onClick={() => onChangeEditMode(true)}>
                <Icons className={s.icons} iconId={'edit-2-outline'} />
              </button>
            </Typography>
            <Typography className={s.email} variant={'body2'}>
              {email}
            </Typography>
            <Button variant={'secondary'}>
              <Icons iconId={'log-out-outline'} /> Logout
            </Button>
          </div>
        )}
      </div>
    </Card>
  )
}
