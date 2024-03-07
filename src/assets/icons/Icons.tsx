import { memo } from 'react'

import IconsSprite from './iconsSprite.svg'

export type IconsPropsType = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}
export const Icons = memo(({ className, height, iconId, viewBox, width }: IconsPropsType) => {
  return (
    <svg
      className={className}
      fill={'#fff'}
      height={height || '24'}
      viewBox={viewBox || '0 0 24 24'}
      width={width || '24'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`${IconsSprite}#${iconId}`} />
    </svg>
  )
})
