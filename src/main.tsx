import { Provider } from 'react-redux'

import { Toast } from '@/components/ui/toast'
import { Router } from '@/router/router'
import { store } from '@/services/store'
import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router />
    <Toast />
  </Provider>
)
