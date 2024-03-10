import React, { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Typography } from '@/components/ui/typography'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectFromRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

type SelectProps = {
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
  ({ children, defaultValue, disabled, onChange, placeholder, title, value }: Props, ref) => {
    const classNames = {
      Icon: clsx(disabled && s.disabled),
      SelectContent: s.SelectContent,
      SelectTrigger: clsx(s.SelectTrigger, disabled && s.SelectTriggerDisabled),
      SelectViewport: s.SelectViewport,
      TypographyTitle: clsx(s.Title, disabled && s.disabled),
    }

    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () => {
      setIsOpen(true)
    }
    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <SelectFromRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onOpenChange={isOpen ? handleClose : handleOpen}
        onValueChange={onChange}
        value={value}
      >
        <Typography className={classNames.TypographyTitle} variant={'body2'}>
          {title}
        </Typography>
        <SelectFromRadix.Trigger aria-label={'Food'} className={classNames.SelectTrigger} ref={ref}>
          <SelectFromRadix.Value placeholder={placeholder} />
          <SelectFromRadix.Icon className={classNames.Icon}>
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </SelectFromRadix.Icon>
        </SelectFromRadix.Trigger>
        <SelectFromRadix.Portal>
          <SelectFromRadix.Content
            className={classNames.SelectContent}
            collisionPadding={0}
            position={'popper'}
          >
            <SelectFromRadix.ScrollUpButton>
              <ChevronUpIcon />
            </SelectFromRadix.ScrollUpButton>
            <SelectFromRadix.Viewport className={classNames.SelectViewport}>
              {children}
            </SelectFromRadix.Viewport>
            <SelectFromRadix.ScrollDownButton>
              <ChevronDownIcon />
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
