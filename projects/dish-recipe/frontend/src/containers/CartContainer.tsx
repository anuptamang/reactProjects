import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Cart from '../components/Cart';
import LayoutContainer from '../components/LayoutContainer';
import { Products } from '../models/product';

const CartContainer = () => {
  const cartProds = useSelector((state:RootStateOrAny) => state.cart.cartItems) as Products[]
  
  return (
    <LayoutContainer>
      <h2 className="text-2xl font-bold mb-2">Cart</h2>
       {
         cartProds.map((product, index) => (
           <Cart key={index} product={product} />
         ))
       }
    </LayoutContainer>
  )
}

export default CartContainer
