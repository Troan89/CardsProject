import React, { ComponentProps, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  error?: string
  label?: string
  labelProps?: ComponentProps<'label'>
  onValueChange?: (value: string) => void
  type: 'email' | 'password' | 'search' | 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      className,
      error,
      label,
      labelProps,
      onChange,
      onValueChange,
      type,
      value,
      ...rest
    }: TextFieldProps & Omit<ComponentPropsWithoutRef<'input'>, keyof TextFieldProps>,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const isShowPasswordIconBtn = type === 'password'
    const isSearchIconBtn = type === 'search'

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      onValueChange?.(event.currentTarget.value)
    }

    const classes = {
      inputWrapper: clsx(s.inputWrapper),
      label: clsx(s.label, rest.disabled && s.disabled, labelProps?.className),
      passwordBtn: clsx(s.passwordBtn, rest.disabled && s.disabled),
      rootContainer: clsx(s.rootContainer),
      searchIcon: clsx(
        s.searchIcon,
        rest.disabled && s.disabled,
        !rest.disabled && s.searchIconActive
      ),
      textField: clsx(
        s.textField,
        !!error && s.error,
        isSearchIconBtn && s.hasSearchIcon,
        className
      ),
    }

    return (
      <div className={classes.rootContainer}>
        {label && (
          <Typography as={'label'} className={classes.label} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classes.inputWrapper}>
          {isSearchIconBtn && <Icons className={classes.searchIcon} iconId={'search-outline'} />}
          <input
            autoFocus
            className={classes.textField}
            onChange={handleChange}
            placeholder={rest.placeholder}
            ref={ref}
            type={type === 'password' && showPassword ? 'text' : type}
            value={value}
            {...rest}
          />
          {isShowPasswordIconBtn && (
            <button
              className={classes.passwordBtn}
              disabled={rest.disabled}
              onClick={() => setShowPassword(prevValue => !prevValue)}
              type={'button'}
            >
              {!showPassword ? (
                <Icons className={s.passwordIcon} iconId={'eye-outline'} />
              ) : (
                <Icons className={s.passwordIcon} iconId={'eye-off-outline'} />
              )}
            </button>
          )}
        </div>
        {error && (
          <Typography className={s.error} variant={'error'}>
            {error}
          </Typography>
        )}
      </div>
    )
  }
)
