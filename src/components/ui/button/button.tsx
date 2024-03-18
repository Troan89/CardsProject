import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children?: ReactNode
  classname?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef<HTMLButtonElement, any>(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: any) => {
    const {
      as: Component = 'button',
      className,
      fullWidth = false,
      variant = 'primary',
      ...rest
    } = props

    return (
      <Component
        className={clsx(s.button, s[variant], fullWidth ? s.fullWidth : '', className)}
        {...rest}
        ref={ref}
      />
    )
  }
)
