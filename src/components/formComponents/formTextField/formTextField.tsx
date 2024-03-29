import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/textField'

export type FormTextFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
} & Omit<TextFieldProps, 'id' | 'onChange' | 'value'>

export const FormTextField = <TFieldValues extends FieldValues>(
  props: FormTextFieldProps<TFieldValues>
) => {
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return (
    <TextField
      {...props}
      {...field}
      error={error?.message}
      id={props.name}
      onChange={onChange}
      value={value}
    />
  )
}
