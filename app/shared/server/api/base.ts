import axios from 'axios'
import { SERVER_URL } from '../config'

export const apiInstance = axios.create({
  baseURL: SERVER_URL,
})
