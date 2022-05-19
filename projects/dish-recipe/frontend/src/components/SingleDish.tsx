import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { CART_ADD_ITEM } from '../constants/cartConstants';
import { Products } from '../models/product';
import Button from './Button';

const SingleDish = () => {
  const history = useHistory()
  const params = useParams() as {id:string}
  const products:Products[] = useSelector((state:RootStateOrAny) => state.productList.products)

  const singleProduct = products?.filter(product => product._id === params.id)[0] 

  if(products.length < 1 || !singleProduct) {
    history.push('/')
  }
  
  // const {name, image, recipeIngredient, recipeInstructions} = singleProduct 

  // const dispatch = useDispatch()
  // const userLogin = useSelector((state:any) => state.userLogin)
  // const prodInCart = useSelector((state:any) => state.cart.cartItems) as Products[]
  
  // const isDisabled = prodInCart.some(item => item._id === singleProduct._id)

  // const { userInfo } = userLogin

  // const addToCart = () => {
  //   dispatch({type: CART_ADD_ITEM, singleProduct})
  // }
  
  return (
    <>
      <div className="row md:flex space-x-3">
          <div className="col md:w-4/12">
              <div className="dish-info__image block rounded bg-cover bg-center h-60 mb-3" style={{'backgroundImage': `url(${singleProduct?.image})`}}></div>              
            {/* {
              userInfo && 
            <Button disabled={isDisabled} onClick={addToCart} width="full">
              {
                isDisabled ? 'Added' : 'Add To Cart'
              }
            </Button>
            } */}
              
          </div>
          <div className="col md:w-4/6">
              <div className="dish-info__text p-3">
                <h2 className="text-2xl font-bold mb-2">{singleProduct?.name}</h2>
                
                <h3 className="text-md font-bold mb-2">Ingredients:</h3>
                {
                    singleProduct?.recipeIngredient.map(ingredient => 
                      ingredient.ingredient_name.length <= 0 || ingredient.ingredient_quantity.length <= 0 || ingredient.ingredient_unit.length <= 0 ? 
                    'Not Available':null)
                  }
                <ol className="list-decimal pl-4 text-sm mb-2">
                  {
                    singleProduct?.recipeIngredient.map(ingredient => 
                      ingredient.ingredient_name.length > 0 || ingredient.ingredient_quantity.length > 0 || ingredient.ingredient_unit.length > 0 ? 
                    <li>
                      <strong className="list-ingredients__name">{ingredient.ingredient_name} : </strong>
                      <span className="list-ingredients__quantity">{ingredient.ingredient_quantity} {ingredient.ingredient_unit}</span>
                    </li>:null)
                  }
                </ol>
                <h3 className="text-md font-bold mb-2">How to cook:</h3>                
                <ol className="list-decimal pl-4 text-sm">
                  {
                    singleProduct?.recipeInstructions.map(instruction=> <li className="mb-2">
                      {instruction}
                  </li>)
                  }
                </ol>
              </div>
          </div>
        </div>
    </>
  )
}

export default SingleDish
