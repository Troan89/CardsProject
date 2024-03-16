import { ComponentPropsWithoutRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { usePagination } from '@/components/ui/pagination/returnPagination'
import { Select, SelectItem } from '@/components/ui/select'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

type PaginationConditionals =
  | {
      onPerPageChange: (itemPerPage: number) => void
      perPage: number
      perPageOptions: number[]
    }
  | {
      onPerPageChange?: never
      perPage?: null
      perPageOptions?: never
    }

export type PaginatorProps = {
  count: number
  limit: number
  onChange: (page: number) => void
  onPerPageChange?: (itemPerPage: number | string) => void
  page: number
  perPage?: number | string
  perPageOptions?: number[]
  siblings?: number
} & PaginationConditionals &
  Omit<ComponentPropsWithoutRef<'div'>, 'onChange'>

const classNames = {
  SelectItem: clsx(s.SelectItem),
  container: clsx(s.container),
  dots: clsx(s.dots),
  icon: clsx(s.Icon),
  item: clsx(s.item),
  pageButton(selected?: boolean) {
    return clsx(s.pageButton, selected && s.selected)
  },
  root: clsx(s.root),
  select: clsx(s.select),
  selectRoot: clsx(s.selectRoot),
}

export const Pagination = ({
  count,
  limit,
  onChange,
  onPerPageChange,
  page,
  perPage,
  perPageOptions,
  siblings,
  ...rest
}: PaginatorProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({ count, onChange, page, siblings })

  const showPerPageSelect = !!onPerPageChange && !!perPage && !!perPageOptions

  return (
    <div className={classNames.root} {...rest}>
      <div className={classNames.container}>
        <PrevButton disabled={isFirstPage} onClick={handlePreviousPageClicked} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton disabled={isLastPage} onClick={handleNextPageClicked} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            onPerPageChange,
            perPage,
            perPageOptions,
          }}
        />
      )}
    </div>
  )
}

type PrevNextButtonType = {
  disabled?: boolean
  onClick: () => void
}

type PageButtonProps = PrevNextButtonType & {
  page: number
  selected: boolean
}

const Dots = () => {
  return <span className={classNames.dots}>&#8230;</span>
}

const Button = ({ disabled, onClick, page, selected }: PageButtonProps) => {
  return (
    <button
      className={classNames.pageButton(selected)}
      disabled={selected || disabled}
      onClick={onClick}
    >
      {page}
    </button>
  )
}

const PrevButton = ({ disabled, onClick }: PrevNextButtonType) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <Icons
        className={classNames.icon}
        height={'10'}
        iconId={'vector-left'}
        viewBox={'0 0 5 10'}
        width={'5'}
      />
    </button>
  )
}

const NextButton = ({ disabled, onClick }: PrevNextButtonType) => {
  return (
    <button className={classNames.item} disabled={disabled} onClick={onClick}>
      <Icons
        className={classNames.icon}
        height={'10'}
        iconId={'vector-right'}
        viewBox={'0 0 5 10'}
        width={'5'}
      />
    </button>
  )
}

type MainPaginationButtonsType = {
  currentPage: number
  onClick: (currentPage: number) => void
  paginationRange: (number | string)[]
}

const MainPaginationButtons = ({
  currentPage,
  onClick,
  paginationRange,
}: MainPaginationButtonsType) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return (
          <Button key={index} onClick={() => onClick(page)} page={page} selected={isSelected} />
        )
      })}
    </>
  )
}

export type PerPageSelectProps = {
  onPerPageChange: (itemPerPage: number | string) => void
  perPage: number | string
  perPageOptions: number[]
}
export const PerPageSelect = ({ onPerPageChange, perPage, perPageOptions }: PerPageSelectProps) => {
  const selectOptions = perPageOptions.map(value => ({
    label: value,
    value,
  }))

  const stringValue = perPage.toString()

  return (
    <div className={classNames.selectRoot}>
      Показать
      <Select
        className={classNames.select}
        label={perPage}
        onChange={onPerPageChange}
        value={stringValue}
      >
        {selectOptions.map(item => (
          <SelectItem className={classNames.SelectItem} key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
      на странице
    </div>
  )
}
