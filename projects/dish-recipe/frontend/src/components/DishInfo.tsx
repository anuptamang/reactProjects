import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART_ADD_ITEM } from '../constants/cartConstants';
import { Products } from '../models/product';
import Button from './Button';
import DishImage from './DishImage';

interface DishInfoProps {
  product: Products
}

const DishInfo:FC<DishInfoProps> = ({product}) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state:any) => state.userLogin)
  const prodInCart = useSelector((state:any) => state.cart.cartItems) as Products[]
  
  const isDisabled = prodInCart.some(item => item._id === product._id)

  const { userInfo } = userLogin

  const addToCart = () => {
    dispatch({type: CART_ADD_ITEM, product})
  }

  return (
    <>
      <div className="dish-info block bg-red-100 dark:bg-white rounded-md overflow-hidden hover:bg-red-300 transition-all w-full">
          <DishImage url={product.image} />
          <div className="dish-info__text p-3">
            <h2 className="text-md font-bold mb-1">{product.name}</h2>                
            <Button variant="Link" to={`/dish/${product._id}`} width="full">View Recipe</Button>
            {
              userInfo && 
            <Button disabled={isDisabled} onClick={addToCart} width="full">
              {
                isDisabled ? 'Added' : 'Add To Cart'
              }
            </Button>
            }
          </div>
        </div>
    </>
  )
}

export default DishInfo
