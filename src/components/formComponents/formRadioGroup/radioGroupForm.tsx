import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup/radioGroup'

export type RadioGroupFormProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<RadioGroupProps, 'onChange' | 'value'>

export const RadioGroupForm = <TFieldValues extends FieldValues>(
  props: RadioGroupFormProps<TFieldValues>
) => {
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <RadioGroup onValueChange={onChange} {...field} {...props} errorMessage={error?.message} />
}
