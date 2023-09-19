import { useNavigate } from '@remix-run/react'
import { useEffect } from 'react'
import { routes } from '../config'

export const useOnlyAuthenticatedAccess = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const authStorage = localStorage.getItem('auth-storage')

    try {
      if (authStorage) {
        const parsed = JSON.parse(authStorage)

        if (!parsed?.state?.acccessToken) {
          return
        }
      }
      navigate(routes.LOGIN)
    } catch (e) {
      navigate(routes.LOGIN)
    }
  }, [navigate])
}
