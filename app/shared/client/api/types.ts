export type Response<Data> = {
  status: boolean
  data: Data
}

export type Paginated<Data> = {
  current_page: number
  data: Data[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  links: {
    url: null | string
    label: string
    active: boolean
  }[]
  next_page_url: null | string
  path: string
  per_page: number
  prev_page_url: null | string
  to: number
  total: number
}

export type Service = {
  id: number
  is_active: boolean
  company_id: number
  name: string
  price: number
  photo: null | string
  created_at: string
  updated_at: string
  description: string
  conditions: {
    age: {
      to: number
      from: number
    }
  }
  created_user_id: number
}

export type User = {
  id: number
  role_id: number
  company_id: number
  name: string
  code: string
  phone: number
  email: string
  email_verified_at: null | string
  photo: null | string
  created_at: string
  updated_at: string
  identify: unknown
  employee_card: unknown
  birth_date: string
}
