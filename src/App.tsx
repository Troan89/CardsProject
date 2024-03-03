import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      {/*<Button href={'https://yandex.ru'}>Hello</Button>*/}
      <Button as={'a'} href={'https://yandex.ru'}>
        Hello Ivan
      </Button>
    </div>
  )
}
