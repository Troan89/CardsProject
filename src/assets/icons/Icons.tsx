import { forwardRef, memo } from 'react'

import IconsSprite from './iconsSprite.svg'

export type IconsPropsType = {
  className?: string
  full?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}
export const Icons = memo(
  forwardRef<SVGSVGElement, IconsPropsType>((props, ref) => {
    const {
      className,
      full = 'none',
      height = '24',
      iconId,
      viewBox = '0 0 24 24',
      width = '24',
      ...rest
    } = props

    return (
      <svg
        className={className}
        fill={full}
        height={height}
        ref={ref}
        viewBox={viewBox}
        width={width}
        xmlns={'http://www.w3.org/2000/svg'}
        {...rest}
      >
        <use xlinkHref={`${IconsSprite}#${iconId}`} />
      </svg>
    )
  })
)
