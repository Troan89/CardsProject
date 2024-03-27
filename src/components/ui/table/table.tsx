import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { clsx } from 'clsx'

import s from './table.module.scss'

export type ColumnType = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type ThProps = {
  columns?: ColumnType
} & ComponentPropsWithoutRef<'th'>

type TdProps = {
  rows?: ColumnType
} & ComponentPropsWithoutRef<'td'>

const Tab = forwardRef<HTMLTableElement, ComponentPropsWithoutRef<'table'>>((props, ref) => {
  const { className, ...rest } = props

  return <table {...rest} className={clsx(s.table, className)} ref={ref} />
})

const Thead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>((props, ref) => {
  const { className, ...rest } = props

  return <thead className={clsx(s.thead, className)} ref={ref} {...rest} />
})

const TableRow = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>((props, ref) => {
  const { className, ...rest } = props

  return <tr className={clsx(s.tr, className)} {...rest} ref={ref} />
})

const HeadCell = forwardRef<ElementRef<'th'>, ThProps>((props, ref) => {
  const { className, columns, ...rest } = props

  return <th ref={ref} {...rest} className={clsx(s.th, className)} data-col={columns} />
})

const TableBody = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  (props, ref) => {
    const { className, ...rest } = props

    return <tbody ref={ref} {...rest} className={clsx(s.tbody, className)} />
  }
)

const TableCell = forwardRef<ElementRef<'td'>, TdProps>((props, ref) => {
  const { className, rows, ...rest } = props

  return <td ref={ref} {...rest} className={clsx(s.td, className)} data-col={rows} />
})

export const Table = {
  Body: TableBody,
  Cell: TableCell,
  Head: Thead,
  HeadCell,
  Root: Tab,
  Row: TableRow,
}
