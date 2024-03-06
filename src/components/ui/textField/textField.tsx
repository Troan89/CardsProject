import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './textField.module.scss'

export type TextFieldProps = {
  className?: string
  error?: string
  label: string
  onChange?: (value: string) => void
  placeholder?: string
  size?: 'large' | 'medium' | 'small'
  type: 'password' | 'search' | 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { className, error, label, onChange, placeholder, type, value, ...rest }: TextFieldProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isShowPasswordIconBtn = type === 'password'
    const isSearchIconBtn = type === 'search'

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.currentTarget.value)
      }
    }

    const setShowPasswordHandler = () => {
      setShowPassword(prevValue => !prevValue)
    }

    const classes = {
      inputWrapper: clsx(s.inputWrapper),
      label: clsx(s.label, rest.disabled && s.disabled, label && label),
      passwordIcon: clsx(s.passwordBtn, rest.disabled && s.disabled),
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
          <Typography as={'label'} className={clsx(s.label, classes.label)} variant={'body2'}>
            {label}
          </Typography>
        )}
        <div className={classes.inputWrapper}>
          {isSearchIconBtn && <Icons className={classes.searchIcon} iconId={'#search'} />}
          <input
            autoFocus
            className={classes.textField}
            onChange={handleChange}
            placeholder={placeholder}
            ref={ref}
            type={isShowPasswordIconBtn && showPassword ? 'text' : type}
            value={value}
            {...rest}
          />
          {isSearchIconBtn && <Icons className={classes.searchIcon} iconId={'#close'} />}
          {isShowPasswordIconBtn && (
            <button
              className={classes.passwordIcon}
              disabled={rest.disabled}
              onClick={setShowPasswordHandler}
              type={'button'}
            >
              {showPassword ? (
                <Icons className={classes.passwordIcon} iconId={'#eye'} />
              ) : (
                <Icons className={classes.passwordIcon} iconId={'#eye-off'} />
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
