import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'
import clsx from 'clsx'

import s from './slider.module.scss'

export type SliderProps = ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
export const Slider = forwardRef(
  ({ className, onValueChange, value, ...rest }: SliderProps, ref: any) => {
    const [valueSlider, setValueSlider] = useState(value)
    const onChangeValueHandler = (newValue: number[]) => {
      setValueSlider(newValue)
    }
    const changeInputValue = (number: number, value: number) => {
      const oldVal = valueSlider?.[number ? 0 : 1]

      if (number === 0) {
        oldVal && setValueSlider([value, oldVal])
      } else {
        oldVal && setValueSlider([oldVal, value])
      }
    }

    return (
      <div className={s.container}>
        <input
          onChange={e => changeInputValue(0, Number(e.target.value))}
          value={valueSlider?.[0]}
        />
        <SliderPrimitive.Root
          className={clsx(s.SliderRoot, className)}
          onValueChange={newValue => onChangeValueHandler(newValue)}
          {...rest}
          ref={ref}
          value={valueSlider}
        >
          <SliderPrimitive.Track className={s.SliderTrack}>
            <SliderPrimitive.Range className={s.SliderRange} />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className={s.SliderThumb} />
          <SliderPrimitive.Thumb className={s.SliderThumb} />
        </SliderPrimitive.Root>
        <input
          onChange={e => changeInputValue(1, Number(e.target.value))}
          value={valueSlider?.[1]}
        />
      </div>
    )
  }
)
