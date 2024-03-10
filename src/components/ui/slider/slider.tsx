import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export type SliderProps = Omit<ComponentPropsWithoutRef<typeof SliderPrimitive.Root>, 'value'> & {
  value?: number | number[]
}
export const Slider = forwardRef(
  ({ className, max = 100, min = 0, onValueChange, value, ...props }: SliderProps, ref: any) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(max)

    const onChangeValueHandler = (newValue: number[]) => {
      setMinValue(newValue[0])
      setMaxValue(newValue[1])
      onValueChange && onValueChange(newValue)
    }

    return (
      <div className={s.container}>
        <input onChange={e => setMinValue(Number(e.target.value))} value={minValue} />
        <SliderPrimitive.Root
          className={clsx(s.SliderRoot, className)}
          max={max}
          min={min}
          onValueChange={newValue => onChangeValueHandler(newValue)}
          {...props}
          ref={ref}
          value={[minValue, maxValue]}
        >
          <SliderPrimitive.Track className={s.SliderTrack}>
            <SliderPrimitive.Range className={s.SliderRange} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className={s.SliderThumb} />
          <SliderPrimitive.Thumb className={s.SliderThumb} />
        </SliderPrimitive.Root>
        <input onChange={e => setMaxValue(Number(e.target.value))} value={maxValue} />
      </div>
    )
  }
)
