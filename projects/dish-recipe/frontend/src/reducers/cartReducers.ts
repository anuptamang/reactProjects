import { CART_ADD_ITEM, CART_ADD_ITEM_SUCCESS, CART_REMOVE_ITEM, CART_RESET } from '../constants/cartConstants'
import { Products } from '../models/product'
 
export const cartReducer = (state = { cartItems: [] }, action:any) => {
 switch (action.type) {
   case CART_ADD_ITEM:
     return state

    case CART_ADD_ITEM_SUCCESS:
      const item = action.product as Products
      return {
        ...state,
        cartItems: [...state.cartItems, item] as any
      }

   case CART_REMOVE_ITEM:
     const id = action.id
     const filteredItems = [...state.cartItems].filter((item:Products)=>item._id !== id)

     localStorage.removeItem('cartItems')
     localStorage.setItem('cartItems', JSON.stringify(filteredItems))
     
     return {
      ...state,
      cartItems: filteredItems
     }

     case CART_RESET:
       return {
         ...state,
        cartItems: []
       }
   default:
     return state
 }
}
