import axios from 'axios'
import { Products } from '../models/product'

export const addProduct = async (product:Products):Promise<Products[]> => {
  
  const { data } = await axios.post(`/api/products`, product)
  return data as Products[]
}