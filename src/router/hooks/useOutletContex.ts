import { useOutletContext } from 'react-router-dom'

type AuthContext = {
  isAuthenticated: boolean
}

export const useAppOutletContext = () => {
  return useOutletContext<AuthContext>()
}
