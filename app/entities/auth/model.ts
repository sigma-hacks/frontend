import { useEffect, useState } from 'react'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { routes } from '~/shared/client/config'

export type AuthState = {
  accessToken: string
  setAccessToken: (accessToken: string) => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        accessToken: '',
        setAccessToken: accessToken => set({ accessToken }),
      }),
      { name: 'auth-storage' }
    )
  )
)

export const useAuthRoute = () => {
  const { accessToken } = useAuthStore()
  const [route, setRoute] = useState(routes.LOGIN)

  useEffect(() => {
    if (accessToken && route !== routes.CABINET_SERVICES) {
      setRoute(routes.CABINET_SERVICES)
    }

    if (!accessToken && route !== routes.LOGIN) {
      setRoute(routes.LOGIN)
    }
  }, [accessToken, route])

  return route
}
