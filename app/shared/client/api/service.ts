import { apiInstance } from './base'
import { Paginated, Service } from './types'

export const getServices = async () => {
  const { data } = await apiInstance.get('/api/company/services', {
    params: { company_id: 'self' },
  })  
  return data.data[1] as Paginated<Service>
}

export type CreateServiceParams = {
  is_active: boolean
  name: string
  description: string
  price: number
  conditions: {
    age: {
      from: number
      to: number
    }
  }
  photo: string
}

export const createService = async (payload: CreateServiceParams) => {
  await apiInstance.post('/api/company/services', payload)
}
