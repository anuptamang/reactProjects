import { Products } from "../models/product"

import React from 'react'
import Button from "./Button"
import { useDispatch } from "react-redux"
import { CART_REMOVE_ITEM } from "../constants/cartConstants"

interface CartInfoProps {
  product: Products;
}

const Cart:React.FC<CartInfoProps> = ({product}) => {
  const dispatch = useDispatch()

  const removeCart = () => {    
    dispatch({type: CART_REMOVE_ITEM, id: product._id})
  }

  return (
    <div>
      
      <div className="row md:flex space-x-3">
          <div className="col md:w-4/12">
              <div className="dish-info__image block rounded bg-cover bg-center h-60 mb-3" style={{'backgroundImage': `url(${product.image})`}}></div>              
          </div>
          <div className="col md:w-4/6">
              <div className="dish-info__text p-3">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <Button onClick={removeCart}>Remove</Button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Cart
