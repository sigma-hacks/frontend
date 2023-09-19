import { apiInstance } from './base'

export type LoginParams = {
  login: string
  password: string
}

export type LoginResponse = {
  status: boolean
  data: {
    token: string
  }
  message: string[]
}

export const login = async ({ login, password }: LoginParams) => {
  const { data } = await apiInstance.post<LoginResponse>('/api/auth/login', {
    login,
    password,
  })
  return data
}
