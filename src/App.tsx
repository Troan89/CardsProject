import { BrowserRouter } from 'react-router-dom'

import { FormValues, SignIn } from '@/components/auth/signIn'
import { SignUp } from '@/components/auth/signUp'

export function App() {
  const handlePerPageChange = (value: FormValues) => {
    console.log(value)
  }

  return (
    <BrowserRouter>
      <SignIn onSubmit={handlePerPageChange} />
      <SignUp onSubmit={handlePerPageChange} />
    </BrowserRouter>
  )
}
