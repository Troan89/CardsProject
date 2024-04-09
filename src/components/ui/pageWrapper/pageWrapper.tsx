import { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './pageWrapper.module.scss'

type PageProps = {
  children?: ReactNode
  className?: string
}

export const PageWrapper = ({ children, className }: PageProps) => {
  return <div className={clsx(s.container, className)}>{children}</div>
}
