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
  tabs: TabType[]
} & ComponentPropsWithoutRef<typeof Tabs.Root>

export const TabSwitcher = forwardRef(
  ({ className, defaultValue, tabs, ...rest }: TabsProps, ref: ForwardedRef<HTMLDivElement>) => (
    <Tabs.Root
      className={clsx(s.rootTabs, className)}
      defaultValue={defaultValue ?? tabs[0].value}
      {...rest}
      ref={ref}
    >
      <Typography className={s.tabsLabel} variant={'body2'}>
        {rest.title}
      </Typography>
      <Tabs.List>
        {tabs.map(tab => (
          <Tabs.Trigger
            className={clsx(s.trigger, className)}
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
)
