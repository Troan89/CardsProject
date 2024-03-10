import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from 'react'

import { Typography } from '@/components/ui/typography'
import * as Tabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

import s from './tabSwitcher.module.scss'

export type TabType = {
  disabled?: boolean
  title: string
  value: string
}

type TabsProps = {
  className?: string
  onValueChange?: (value: string) => void
  tabs: TabType[]
  value?: string
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = forwardRef(
  (
    { className, defaultValue, onValueChange, tabs, value, ...rest }: TabsProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const handleValueChange = (newValue: string) => {
      if (onValueChange) {
        onValueChange(newValue)
      }
    }

    return (
      <Tabs.Root
        className={clsx(s.rootTabs, className)}
        value={value || defaultValue}
        {...rest}
        onValueChange={handleValueChange}
        ref={ref}
      >
        <Typography className={s.tabsLabel} variant={'body2'}>
          {rest.title}
        </Typography>
        <Tabs.List>
          {tabs.map(tab => (
            <Tabs.Trigger
              className={s.trigger}
              disabled={tab.disabled}
              key={tab.value}
              value={tab.value}
            >
              {tab.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
    )
  }
)
