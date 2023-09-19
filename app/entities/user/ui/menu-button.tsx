import { useNavigate } from '@remix-run/react'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useAuthStore } from '~/entities/auth/model'
import { userApi } from '~/shared/client/api'
import { routes } from '~/shared/client/config'

export const UserMenuButton = () => {
  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(['user'], () => userApi.getMe())
  const { setAccessToken } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isError) return

    setAccessToken('')
    alert('Не удалось получить пользователя. Попробуйте войти в кабинет заново')
    navigate(routes.HOME)
  }, [isError, navigate, setAccessToken])

  if (isLoading || isError) {
    return (
      <div className="p-2 bg-black/5 rounded-xl animate-pulse">
        <div className="h-[40px] w-[250px]"></div>
      </div>
    )
  }

  return (
    <button className="flex items-center gap-4 hover:bg-black/5 transition-colors duration-200 p-2 rounded-xl">
      {user.name}
      <img
        src="/assets/img/nn-user.jpeg"
        alt=""
        className="w-[40px] h-[40px] rounded-full"
      />
    </button>
  )
}
