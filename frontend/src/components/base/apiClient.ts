import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default async function fetchData(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' = 'GET',
  data: any = null,
  params: any = null
) {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method,
      data,
      params
    })
    return response.data
  } catch (error: any) {
    console.error(`API Request Error (${method} ${endpoint}):`, error)
    throw error.response?.data || error.message
  }
}
