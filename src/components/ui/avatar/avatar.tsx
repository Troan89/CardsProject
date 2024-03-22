import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './avatar.module.css'

type Props = {
  className?: string
  height?: string
  src?: string
  width?: string
} & ComponentPropsWithoutRef<'img'>
export const Avatar = (props: Props) => {
  const { className, height = '36px', style, width = '36px', ...rest } = props

  return (
    <img
      alt={'avatar'}
      className={clsx(s.avatar, className)}
      src={props.src}
      style={{
        ...style,
        height,
        width,
      }}
      {...rest}
    />
  )
}
