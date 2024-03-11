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

type Options = {
  label: string
  value: string
}
type RadioGroupProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  errorMessage?: string
  options: Options[]
}

const RadioGroup = forwardRef<ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  (props, ref) => {
    const { errorMessage, options, ...rest } = props

    return (
      <RadioGroupRoot
        {...rest}
        onValueChange={e => {
          console.log(e)
        }}
        ref={ref}
        // value={''}
      >
        {options.map(option => {
          return (
            <div className={s.option} key={option.value}>
              <RadioGroupItem value={option.value} />
              <Typography as={'label'} variant={'body2'}>
                {option.label}
              </Typography>
            </div>
          )
        })}
      </RadioGroupRoot>
    )
  }
)

export { RadioGroup, RadioGroupItem, RadioGroupRoot }
