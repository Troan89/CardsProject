import { Router } from '@/router/router'

import { Toast } from './components/ui/toast'

export function App() {
  return (
    <div>
      <Router />
      <Toast />
    </div>
  )
}
