import { ComponentPropsWithoutRef, forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  ariaLabelMax?: string
  ariaLabelMin?: string
}
export const Slider = forwardRef(
  (
    { ariaLabelMax, ariaLabelMin, className, max, onValueChange, value, ...rest }: SliderProps,
    ref: any
  ) => {
    const onChangeValueHandler = (newValue: number[]) => {
      onValueChange?.(newValue)
    }
    const changeInputValue = (number: number, value: number) => {
      // @ts-ignore
      const oldVal: number | undefined = value?.[number ? 0 : 1]

      let newValue: number[]

      if (number === 0) {
        newValue = [value, oldVal as number]
      } else {
        newValue = [oldVal as number, value]
      }
      onValueChange?.(newValue)
    }

    return (
      <div className={s.container}>
        <input onChange={e => changeInputValue(0, Number(e.target.value))} value={value?.[0]} />
        <SliderPrimitive.Root
          className={clsx(s.SliderRoot, className)}
          onValueChange={newValue => onChangeValueHandler(newValue)}
          {...rest}
          max={max}
          ref={ref}
          value={value}
        >
          <SliderPrimitive.Track className={s.SliderTrack}>
            <SliderPrimitive.Range className={s.SliderRange} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb aria-label={ariaLabelMin} className={s.SliderThumb} />
          <SliderPrimitive.Thumb aria-label={ariaLabelMax} className={s.SliderThumb} />
        </SliderPrimitive.Root>
        <input onChange={e => changeInputValue(1, Number(e.target.value))} value={value?.[1]} />
      </div>
    )
  }
)
