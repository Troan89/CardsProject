import React from 'react'

import { clsx } from 'clsx'

import s from './card.module.scss'

export type CardProps = {
  className?: string
  style?: React.CSSProperties
}

export const Card = ({ className, style, ...restProps }: CardProps) => {
  const classNames = {
    root: clsx(s.root, className),
  }

  return <div className={classNames.root} style={style} {...restProps}></div>
}
