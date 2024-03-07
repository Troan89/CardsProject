import Default from '@/assets/icons/DefaultTrue.svg'
import Disabled from '@/assets/icons/DisabledTrue.svg'
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
    container: s.container,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: s.root,
  }

  return (
    <div className={classNames.container}>
      <div className={classNames.buttonWrapper}>
        <CheckboxRadix.Root
          checked={checked}
          className={classNames.root}
          disabled={disabled}
          id={id}
          onCheckedChange={onChange}
          required={required}
        >
          {!disabled && checked && <img alt={'Check'} src={Default} />}
          {disabled && checked && <img alt={'Disabled'} src={Disabled} />}
        </CheckboxRadix.Root>
      </div>
      <Typography className={classNames.label} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
