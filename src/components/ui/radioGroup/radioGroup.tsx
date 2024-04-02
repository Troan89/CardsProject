import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'

import s from './radioGroup.module.scss'

const RadioGroupRoot = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={clsx(s.root, className)} {...props} ref={ref} />
})

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item className={clsx(s.options, className)} ref={ref} {...props}>
      <div className={s.radio}></div>
    </RadioGroupPrimitive.Item>
  )
})

export type Options = {
  label: string
  value: string
}
export type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  errorMessage?: string
  onChangeValue: (grade: number) => void
  options: Options[]
}

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  (props, ref) => {
    const { errorMessage, onChangeValue, options, ...rest } = props

    const radioGroupOptions = options.map(option => {
      return (
        <div className={s.option} key={option.value}>
          <RadioGroupItem value={option.value} />
          <Typography as={'label'} htmlFor={option.value} variant={'body2'}>
            {option.label}
          </Typography>
        </div>
      )
    })

    return (
      <RadioGroupRoot
        {...rest}
        onValueChange={e => {
          onChangeValue(+e)
        }}
        ref={ref}
      >
        {radioGroupOptions}
      </RadioGroupRoot>
    )
  }
)

export { RadioGroup, RadioGroupItem, RadioGroupRoot }
