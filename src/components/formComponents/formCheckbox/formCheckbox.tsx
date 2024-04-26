import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CheckBox, CheckboxProps } from '../../ui/checkBox'

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<CheckboxProps, 'checked' | 'onValueChange'>
export const FormCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    disabled: disabled,
    name: name,
    shouldUnregister,
  })

  return <CheckBox {...rest} checked={value} onBlur={onBlur} onChange={onChange} ref={ref} />
}
