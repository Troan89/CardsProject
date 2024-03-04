import { FC } from 'react'

import Check from '@/assets/icons/check'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'

import s from './check-box.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  position?: 'left'
  required?: boolean
}

export const Checkbox: FC<CheckboxProps> = ({
  checked,
  className,
  disabled,
  id,
  label,
  onChange,
  position,
  required,
}) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled, position === 'left' && s.left),
    container: clsx(s.container, className),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <LabelRadix.Root>
        <div className={classNames.label}>
          <div className={classNames.buttonWrapper}>
            <CheckboxRadix.Root
              checked={checked}
              className={classNames.root}
              disabled={disabled}
              id={id}
              onCheckedChange={onChange}
              required={required}
            >
              {checked && (
                <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
                  <Check />
                </CheckboxRadix.Indicator>
              )}
            </CheckboxRadix.Root>
          </div>
          {label}
        </div>
      </LabelRadix.Root>
    </div>
  )
}
