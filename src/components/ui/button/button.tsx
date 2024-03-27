import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = ElementType> = {
  as?: T
  children?: ReactNode
  classname?: string
  fullWidth?: boolean
  variant?: 'icon' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: any) => {
    const { as: Component = 'button', className, fullWidth = false, variant, ...rest } = props
    const classes = clsx(
      s.button,
      variant ? s[variant] : '', // Если variant не определен, не используем его как индекс
      fullWidth ? s.fullWidth : '',
      className
    )

    return <Component className={classes} {...rest} ref={ref} />
  }
)
