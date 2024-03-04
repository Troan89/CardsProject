import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

export function App() {
  return (
    <div>
      {/*<Button href={'https://yandex.ru'}>Hello</Button>*/}
      <Button as={'a'} href={'https://yandex.ru'}>
        Hello
      </Button>
      <Typography as={'h1'} variant={'h1'}>
        H1
      </Typography>
      <Typography as={'h2'} variant={'h2'}>
        H2
      </Typography>
      <Typography as={'h3'} variant={'h3'}>
        H3
      </Typography>
      <Typography as={'h4'} variant={'h4'}>
        H4
      </Typography>
      <Typography as={'p'} variant={'body1'}>
        body1
      </Typography>
      <Typography as={'p'} variant={'body2'}>
        body2
      </Typography>
      <Typography as={'p'} variant={'caption'}>
        caption
      </Typography>
      <Typography as={'p'} variant={'overline'}>
        overline
      </Typography>
      <Typography as={'p'} variant={'subtitle1'}>
        subtitle1
      </Typography>
      <Typography as={'p'} variant={'subtitle2'}>
        subtitle2
      </Typography>
      <Typography as={'a'} variant={'link1'}>
        link1
      </Typography>
      <Typography as={'a'} variant={'link2'}>
        link2
      </Typography>
    </div>
  )
}
