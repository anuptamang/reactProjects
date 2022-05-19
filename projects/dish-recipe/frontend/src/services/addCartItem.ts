import axios from 'axios'
import { Products } from '../models/product'

export const addCartItem = async (product:Products, id:string):Promise<Products[]> => {
  
  const { data } = await axios.get(`/api/products/${id}`)

  // localStorage.setItem('cartItems', JSON.stringify())
  
  return data as Products[]
}