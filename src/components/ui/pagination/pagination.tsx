import { ComponentPropsWithoutRef } from 'react'

import { Icons } from '@/assets/icons/Icons'
import { usePagination } from '@/components/ui/pagination/returnPagination'
import { Select, SelectItem } from '@/components/ui/select'
import { clsx } from 'clsx'

import s from './pagination.module.scss'

export type PaginatorProps = {
  count: number
  limit: number
  onChange: (page: number) => void
  page: number
  siblings: number
} & Omit<ComponentPropsWithoutRef<'div'>, 'onChange'>

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

export const Pagination = ({ count, limit, onChange, page, siblings, ...rest }: PaginatorProps) => {
  const {
    handleMainPageClicked,
    handleNextPageClicked,
    handlePreviousPageClicked,
    isFirstPage,
    isLastPage,
    paginationRange,
  } = usePagination({ count, onChange, page, siblings })

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

        <div className={classNames.selectRoot}>
          Показать
          <Select className={classNames.select} placeholder={'hello'}>
            <SelectItem className={classNames.SelectItem} value={'1'}>
              100
            </SelectItem>
            <SelectItem className={classNames.SelectItem} value={'2'}>
              50
            </SelectItem>
          </Select>
          на странице
        </div>
      </div>
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
        full={disabled ? 'grey' : 'white'}
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
        full={disabled ? 'grey' : 'white'}
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
