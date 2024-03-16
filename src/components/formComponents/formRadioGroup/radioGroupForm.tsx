import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radioGroup/radioGroup'

export type RadioGroupFormProps<TFieldValues extends FieldValues> =
  UseControllerProps<TFieldValues> & Omit<RadioGroupProps, 'onChange' | 'value'>

export const RadioGroupForm = <TFieldValues extends FieldValues>(
  props: RadioGroupFormProps<TFieldValues>
) => {
  const { control, name, options } = props
  const {
    field: { onChange, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
  })

  return (
    <RadioGroup
      onValueChange={onChange}
      {...field}
      {...props}
      errorMessage={error?.message}
      options={options}
    />
  )
}
