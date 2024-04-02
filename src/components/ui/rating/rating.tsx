import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import clsx from 'clsx'

import s from './rating.module.scss'

export type RatingPropsType = {
  value: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = forwardRef<HTMLDivElement, RatingPropsType>(
  ({ value, ...rest }, ref: ForwardedRef<HTMLDivElement>) => {
    const maxRating: number = 5
    const stars = [...Array(maxRating)].map((_, index) => index + 1)

    return (
      <div className={clsx(s.root, rest.className)} {...rest} ref={ref}>
        {stars.map((star, index) => (
          <span key={index}>
            {value >= star ? (
              <Icons className={s.icon} iconId={'star'} />
            ) : (
              <Icons className={s.icon} iconId={'star-outline'} />
            )}
          </span>
        ))}
      </div>
    )
  }
)
