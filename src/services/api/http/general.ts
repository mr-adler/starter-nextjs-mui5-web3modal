import axios from 'axios'
import { camelize } from 'utils/camelize'

export const httpGeneralApi = {
  async getDataByUrl<Type>(url: string): Promise<Type> {
    const { data } = await axios.get(url)

    return camelize(data)
  },
}
