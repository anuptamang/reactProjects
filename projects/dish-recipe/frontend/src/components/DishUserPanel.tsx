import React, { FC } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'
import { Products } from '../models/product'
import Button from './Button'
import FilterInput from './FilterInput';
import Loader from './Loader';

interface DishUserPanelProps {
  handleFilterCheck: (value:string, add:boolean) => void
}

const DishUserPanel:FC<DishUserPanelProps> = ({handleFilterCheck}) => {
  const products:Products[] = useSelector((state:RootStateOrAny) => state.productList.products)

  const ingName = products.map(product=> product.recipeIngredient.filter(item => item).map(filterItem => filterItem.ingredient_name))

  const {loading} = useSelector((state:RootStateOrAny)=> state.productList)

  const finalIng = ingName.reduce((acc, curr) => {

    curr.map(singleCurr => {
      
      if(!acc.includes(singleCurr.toLocaleLowerCase())) {
        acc.push(singleCurr.toLocaleLowerCase())
      }
      return acc
    })

    return acc

  } ,[])
  
  

  return (
    <div className="dish-user-panel md:flex md:justify-between mb-5">
      <div className="form filter-form md:w-2/3 mb-3">
        <h2 className="flex items-center text-2xl w-full h-14 bg-red-200 dark:bg-gray-900 dark:text-white px-4 py-1 rounded">Filter Dish Recipes</h2>
          <div className="filter-drop p-3 bg-red-100 dark:bg-white rounded">
            {
              loading ? <Loader /> : 
            <ul className="list-none flex flex-wrap">
              {
                finalIng.map(ingType=> 
                  <FilterInput onFilter={handleFilterCheck} key={ingType} ingType={ingType} />
                  ) 
                }
            </ul>
            }
          </div>
      </div>
       <Button variant="Link" size="lg" to="/add">Add Dish Recipe</Button>
    </div>
  )
}

export default DishUserPanel
