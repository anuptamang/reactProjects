import {
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from '../constants/productConstants'
 
export const productListReducer = (state = { products: [] }, action:any):any => {
 switch (action.type) {
   case PRODUCT_LIST_REQUEST:
     return { loading: true, products: [] }
   case PRODUCT_LIST_SUCCESS:     
     return { loading: false, products: action.products }
   case PRODUCT_LIST_FAIL:
     return { loading: false, error: action.products }
   default:
     return state
 }
}

export const productCreateReducer = (state = {}, action:any) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.products }
    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: true }
    case PRODUCT_CREATE_RESET:
      return {}
    default:
      return state
  }
}