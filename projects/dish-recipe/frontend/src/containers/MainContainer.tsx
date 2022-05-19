import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import DishInfo from '../components/DishInfo';
import DishUserPanel from '../components/DishUserPanel';
import LayoutContainer from '../components/LayoutContainer';
import Loader from '../components/Loader';
import { PRODUCT_LIST_REQUEST } from '../constants/productConstants';
import { Products } from '../models/product';

const MainContainer = () => {
  const dispatch = useDispatch()
  const {loading} = useSelector((state:RootStateOrAny)=> state.productList)

  const fetchProduct = () => dispatch({type: PRODUCT_LIST_REQUEST})
  const products:Products[] = useSelector((state:RootStateOrAny) => state.productList.products)

  const [checkedTypes, setCheckedTypes] = useState<string[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([])
  
  const handleFilterCheck = (value:string,add:boolean) => { 

    if(add) {
      setCheckedTypes([...checkedTypes, value])
      return
    } 

    const filteredTypes = [...checkedTypes].filter(type=> type !== value)
    setCheckedTypes(filteredTypes)
  }
  
  useEffect(() => {
    if(products) {
      setFilteredProducts(products)
    }
  }, [products])

  useEffect(() => {
    if(checkedTypes.length === 0) {
      setFilteredProducts(products)
      return
    }

    const filterOutput = [...products].reduce((acc, curr) => {
    const check = curr.recipeIngredient.some(rp => {

      if(checkedTypes.some(ct =>  ct.toLowerCase() === rp.ingredient_name.toLowerCase())) {
        return true;
      }
        return false;
      });

      if(check) acc.push(curr)

      return acc;

    }, [] as Products[])

    setFilteredProducts(filterOutput)
    
  }, [checkedTypes])
  
  useEffect(() => {
    fetchProduct()
  }, [])
  
  return (
    <>
      <LayoutContainer>
        <DishUserPanel handleFilterCheck={handleFilterCheck}  />
        {
          loading ? <Loader /> : 
        <div className="row md:flex md:flex-wrap md:-m-3">
          {
            filteredProducts?.map(product=> <div key={product._id} className="col md:w-1/2 lg:w-3/12 p-3 flex">
            <DishInfo product={product} />
          </div>)
          }
        </div>
        }
      </LayoutContainer>
    </>
  )
}

export default MainContainer
