import { ComponentPropsWithoutRef, forwardRef, memo } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { ColumnType, Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { clsx } from 'clsx'

import s from './tableSortHeader.module.scss'

export type Column = {
  column: ColumnType
  sortBy: string
  sortable?: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  sortBy: string
} | null

export type TableSortProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    onSort?: (sort: Sort) => void
    sort?: Sort
  },
  'children'
>

export const TableSort = memo(
  forwardRef<HTMLSpanElement, TableSortProps>(({ columns, onSort, sort, ...rest }, ref) => {
    const handleSort = (sortBy: string, sortable?: boolean) => () => {
      if (!onSort || !sortable) {
        return
      }
      if (sort?.sortBy !== sortBy) {
        onSort({ direction: 'asc', sortBy })
      } else if (sort?.direction === 'desc') {
        onSort(null)
      } else {
        const direction = sort?.direction === 'asc' ? 'desc' : 'asc'

        onSort({ direction, sortBy })
      }
    }

    return (
      <Table.Head {...rest}>
        <Table.Row>
          {columns.map(({ column, sortBy, sortable = true, title }) => (
            <Table.HeadCell
              className={s.theadSort}
              columns={column}
              key={sortBy}
              onClick={handleSort(sortBy, sortable)}
            >
              <Typography variant={'subtitle2'}>{title}</Typography>
              {sort && sort.sortBy === sortBy && (
                <span
                  className={clsx(s.sortDefault, sort?.direction === 'asc' ? s.asc : s.desc)}
                  ref={sort?.sortBy === sortBy ? ref : null}
                >
                  <Icons className={s.icon} iconId={'arrow-ios-Up'} />
                </span>
              )}
            </Table.HeadCell>
          ))}
        </Table.Row>
      </Table.Head>
    )
  })
)
