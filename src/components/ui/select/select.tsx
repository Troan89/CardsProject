import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { Typography } from '@/components/ui/typography'
import * as SelectFromRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onChange?: (value: string) => void
  placeholder?: string
  title?: string
  value?: string
}

type Props = SelectProps & ComponentPropsWithoutRef<typeof SelectFromRadix.Root>

export const Select = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      defaultValue,
      disabled,
      onChange,
      placeholder,
      title,
      value,
      ...props
    }: Props,
    ref
  ) => {
    const classNames = {
      Icon: clsx(s.Icon, disabled && s.disabled),
      SelectContent: s.SelectContent,
      SelectTrigger: clsx(s.SelectTrigger, disabled && s.SelectTriggerDisabled, className),
      SelectViewport: s.SelectViewport,
      TypographyTitle: clsx(s.Title, disabled && s.disabled),
    }

    return (
      <SelectFromRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onChange}
        value={value}
        {...props}
      >
        <Typography className={classNames.TypographyTitle} variant={'body2'}>
          {title}
        </Typography>
        <SelectFromRadix.Trigger aria-label={'Food'} className={classNames.SelectTrigger} ref={ref}>
          <SelectFromRadix.Value placeholder={placeholder} />
          <SelectFromRadix.Icon className={classNames.Icon}>
            <Icons height={'6'} iconId={'vector-select'} viewBox={'0 0 11 6'} width={'11'} />
          </SelectFromRadix.Icon>
        </SelectFromRadix.Trigger>
        <SelectFromRadix.Portal>
          <SelectFromRadix.Content
            className={classNames.SelectContent}
            collisionPadding={0}
            position={'popper'}
          >
            <SelectFromRadix.ScrollUpButton>
              <Icons height={'6'} iconId={'vector-select-up'} viewBox={'0 0 11 6'} width={'11'} />
            </SelectFromRadix.ScrollUpButton>
            <SelectFromRadix.Viewport className={classNames.SelectViewport}>
              {children}
            </SelectFromRadix.Viewport>
            <SelectFromRadix.ScrollDownButton>
              <Icons height={'6'} iconId={'vector-select'} viewBox={'0 0 11 6'} width={'11'} />
            </SelectFromRadix.ScrollDownButton>
          </SelectFromRadix.Content>
        </SelectFromRadix.Portal>
      </SelectFromRadix.Root>
    )
  }
)

export const SelectItem = forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ className?: string; disabled?: boolean; value: string }>
>(({ children, className, value, ...props }, forwardedRef) => {
  const classNames = {
    TypographyTitle: clsx(s.SelectItem, className),
  }

  return (
    <SelectFromRadix.Item
      className={classNames.TypographyTitle}
      {...props}
      ref={forwardedRef}
      value={value}
    >
      <Typography variant={'body1'}>
        <SelectFromRadix.ItemText>{children}</SelectFromRadix.ItemText>
      </Typography>
    </SelectFromRadix.Item>
  )
})
