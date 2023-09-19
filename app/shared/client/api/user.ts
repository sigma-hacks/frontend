import { apiInstance } from './base'
import { Response, User } from './types'

export const getMe = async () => {
  const { data } = await apiInstance.get<Response<User>>('/api/user')

  if (!data.status) {
    throw new Error('Не удалось получить пользователя')
  }

  return data.data
}
