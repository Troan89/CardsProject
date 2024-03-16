import { NavLink } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './error404Page.module.scss'

import error404 from '../../assets/img/404.png'

export const Error404Page = () => {
  return (
    <div className={s.container}>
      <img alt={''} src={error404} />
      <Typography className={s.text} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={NavLink} to={'/'} variant={'primary'}>
        Back to home page
      </Button>
    </div>
  )
}
