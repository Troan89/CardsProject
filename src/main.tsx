import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'

import { Toast } from '@/components/ui/toast'
import { Router } from '@/router/router'
import { authService } from '@/services/auth'
import { store } from '@/services/store'
import { FallbackComponent } from '@/utils/errorBoundary/fallbackComponent'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary
    FallbackComponent={FallbackComponent}
    onReset={() => {
      // сбросить состояние  приложения
      authService.util.invalidateTags(['Me'])
    }}
  >
    <Provider store={store}>
      <Router />
      <Toast />
    </Provider>
  </ErrorBoundary>
)

/*
//компонента для демонстрации работы ErrorBoundary
class ErrorThrower extends React.Component {
  state = {
    throwError: false,
  }

  componentDidMount() {
    this.setState({ throwError: true })
  }

  render() {
    if (this.state.throwError) {
      throw new Error('Test error')
    }

    return null
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary
    FallbackComponent={FallbackComponent}
    onReset={() => {
      // сбросить состояние  приложения
      authService.util.invalidateTags(['Me'])
    }}
  >
    <Provider store={store}>
      <ErrorThrower />
      <Toast />
    </Provider>
  </ErrorBoundary>
)
*/
