import { ComponentPropsWithoutRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import clsx from 'clsx'

import s from './avatar.module.css'

type Props = {
  className?: string
  height?: string
  src?: string
  width?: string
} & ComponentPropsWithoutRef<'img'>
export const Avatar = (props: Props) => {
  const { className, height = '36px', src, style, width = '36px', ...rest } = props

  if (!src) {
    return (
      <Icons
        className={clsx(s.avatarIcon, className)}
        height={height}
        iconId={'person-outline'}
        width={width}
        {...rest}
      />
    )
  }

  return (
    <img
      alt={'avatar'}
      className={clsx(s.avatar, className)}
      src={src}
      style={{
        ...style,
        height,
        width,
      }}
      {...rest}
    />
  )
}
