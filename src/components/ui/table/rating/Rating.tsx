import { ComponentPropsWithoutRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import clsx from 'clsx'

import s from './rating.module.scss'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
  onClick?: (value: number) => void
  value: RatingValueType
} & ComponentPropsWithoutRef<'div'>

export const Rating = ({ onClick, value, ...rest }: RatingPropsType) => {
  const maxRating: RatingValueType = 5
  const stars = [...Array(maxRating)].map((_, index) => index + 1)
  const handleClick = (newValue: number) => {
    if (onClick) {
      onClick(newValue)
    }
  }

  if (onClick) {
    return (
      <div className={clsx(s.root, rest.className)} {...rest}>
        {stars.map((star, index) => (
          <span key={index} onClick={() => handleClick(star)}>
            {value >= star ? (
              <Icons className={s.icon} iconId={'star'} />
            ) : (
              <Icons className={s.icon} iconId={'star-outline'} />
            )}
          </span>
        ))}
      </div>
    )
  } else {
    return (
      <div className={clsx(s.root, rest.className)} {...rest}>
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
}
