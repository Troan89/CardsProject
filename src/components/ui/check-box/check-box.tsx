import { Icons } from '@/assets/icons/Icons'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './check-box.module.scss'

export type CheckboxProps = {
  checked?: boolean
  disabled?: boolean
  id?: string
  label?: string
  onChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = ({ checked, disabled, id, label, onChange, required }: CheckboxProps) => {
  const classNames = {
    buttonWrapper: clsx(s.buttonWrapper, disabled && s.disabled),
    container: clsx(s.container),
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <Typography as={'label'} className={classNames.label} variant={'body2'}>
        <div className={classNames.buttonWrapper}>
          <CheckboxRadix.Root
            checked={checked}
            className={classNames.root}
            disabled={disabled}
            id={id}
            onCheckedChange={onChange}
            required={required}
          >
            <CheckboxRadix.Indicator className={classNames.indicator} forceMount>
              {checked && <Icons iconId={'iconCheckbox'} />}
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {label}
      </Typography>
    </div>
  )
}
