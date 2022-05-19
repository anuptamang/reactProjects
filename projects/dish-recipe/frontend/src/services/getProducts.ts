import axios from 'axios'
import {Products} from '../models/product'


export const getProducts = async ():Promise<Products[]> => {
  const { data } = await axios.get('/api/products')
  
  return data as Products[]
}