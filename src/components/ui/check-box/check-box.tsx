import { Icons } from '@/assets/icons/Icons'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
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
          {!disabled && checked && (
            <Icons className={s.svg} height={'80'} iconId={'default-true'} width={'80'} />
          )}
          {disabled && checked && <Icons height={'80'} iconId={'disabled-true'} width={'80'} />}
        </CheckboxRadix.Root>
      </div>
      <LabelRadix.Root className={classNames.label}>{label}</LabelRadix.Root>
    </div>
  )
}
