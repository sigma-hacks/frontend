import axios from 'axios'
import { authModel } from '~/entities/auth'
import { apiConfig } from '../config'

export const apiInstance = axios.create({
  baseURL: apiConfig.SERVER_URL,
  headers: {
    Accept: 'application/json',
  },
})

apiInstance.interceptors.request.use(
  config => {
    const accessToken = authModel.useAuthStore.getState().accessToken

    if (accessToken !== '') {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  err => err
)
