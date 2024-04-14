import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './fallbackComponent.module.scss'

import errorImg from '../../assets/img/error.svg'

// Компонент отката
export function FallbackComponent({
  error,
  resetErrorBoundary,
}: {
  error: Error
  resetErrorBoundary: () => void
}) {
  return (
    <div className={s.container}>
      <Typography as={'h2'} variant={'h2'}>
        Oops! Something went wrong!
      </Typography>
      <img alt={'Oops! Error'} src={errorImg} />
      <details aria-details={'Details:'} style={{ whiteSpace: 'pre-wrap' }}>
        {error.message}
      </details>
      <Button onClick={resetErrorBoundary} variant={'primary'}>
        Try again!
      </Button>
    </div>
  )
}

// Компонент нативный для отлавливания ошибок. В настоящее время рекомендуется к использованию react-error-boundary
/*
import { Component, ErrorInfo, ReactNode } from 'react'
interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Вы также можете залогировать ошибку в сервис отчета об ошибках
    console.error(error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Отображение пользовательского сообщения об ошибке или запасного интерфейса
      return <div>Упс! Что-то пошло не так.</div>
    }

    // Отображение дочерних компонентов, если ошибок не возникло
    return this.props.children
  }
}
*/
