import { forwardRef, memo } from 'react'

import IconsSprite from './iconsSprite.svg'

export type IconsPropsType = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}
export const Icons = memo(
  forwardRef<SVGSVGElement, IconsPropsType>((props, ref) => {
    const { className, height = '24', iconId, viewBox = '0 0 24 24', width = '24' } = props

    return (
      <svg
        className={className}
        fill={'none'}
        height={height || '24'}
        ref={ref}
        viewBox={viewBox || '0 0 24 24'}
        width={width || '24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <use xlinkHref={`${IconsSprite}#${iconId}`} />
      </svg>
    )
  })
)
