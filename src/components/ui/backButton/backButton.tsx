import { MouseEvent, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Icons } from '@/assets/icons/Icons'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './backButton.module.scss'

export type Props = {
  className?: string
  text?: string
}

export const BackButton = ({ className, text = 'Back to Previous Page', ...rest }: Props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [previousLocation, setPreviousLocation] = useState()

  useEffect(() => {
    // @ts-ignore
    setPreviousLocation(location)
  }, [location])

  const backHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (previousLocation) {
      navigate(-1)
    }
  }

  const classNames = clsx(s.button, className)

  return (
    <Button
      as={Link}
      className={classNames}
      disabled={!previousLocation} // кнопка будет задизейблена, если нет предыдущего маршрута
      onClick={backHandler}
      relative={'path'}
      to={'..'}
      {...rest}
    >
      <Icons className={s.icon} iconId={'arron-back-outline'} />
      <Typography variant={'body2'}>{text}</Typography>
    </Button>
  )
}
