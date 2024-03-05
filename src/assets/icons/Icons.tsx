import React from 'react'

import clsx from 'clsx'

type IconsPropsType = {
  className?: string
  height?: string
  iconId: string
  viewBox?: string
  width?: string
}

export const Icons = React.forwardRef<SVGSVGElement, IconsPropsType>((props, ref) => {
  const { className, height = '24', iconId, viewBox = '0 0 24 24', width = '24' } = props

  return (
    <svg
      className={clsx(className)}
      fill={'none'}
      height={height}
      ref={ref}
      viewBox={viewBox}
      width={width}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <use xlinkHref={`../../assets/img/iconsSprite.svg#${iconId}`} />
    </svg>
  )
})
