import { ChangeEvent, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../components/Button';
import LayoutContainer from '../components/LayoutContainer';
import Loader from '../components/Loader';
import { PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_RESET } from '../constants/productConstants';
import { RecipeIngredient } from '../models/product';

const AddDishContainer = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const {loading, success} = useSelector((state:RootStateOrAny) => state.productCreate)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [recipeIngredient, setRecipeIngredient] = useState<RecipeIngredient[]>([{ ingredient_name: '', ingredient_quantity : '', ingredient_unit: ''}])
  const [recipeInstructions, setRecipeInstructions] = useState('')  

  const handleIngredientChange = (i:number, e:React.ChangeEvent<HTMLInputElement>) => {
    let newIngredients = [...recipeIngredient]
    let inputName = e.target.name

    const ingredientKeys = Object.keys(newIngredients[i])

    ingredientKeys.forEach((key:string) => {
      if(key === inputName) {
        newIngredients[i][key] = e.target.value;
      }
    })

    setRecipeIngredient(newIngredients)
  }  

  const addMoreIngredientsField = (e:any) => {
    e.preventDefault()
    setRecipeIngredient([...recipeIngredient, { ingredient_name: '', ingredient_quantity : '', ingredient_unit: ''}])
  }

  let removeMoreIngredientsField = (i:number) => {
    let newIngredients = [...recipeIngredient];
    newIngredients.splice(i, 1);
    setRecipeIngredient(newIngredients)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()    
    const data = {
      name,
      image,
      recipeIngredient,
      recipeInstructions: recipeInstructions.split('\n')
    }
    dispatch({type: PRODUCT_CREATE_REQUEST, payload: data})
  }

  useEffect(() => {
    if(success) {
      history.push('/')
      setName('')
      setImage('')
      setRecipeIngredient([{ ingredient_name: '', ingredient_quantity : '', ingredient_unit: ''}])
      setRecipeInstructions('')
      dispatch({type: PRODUCT_CREATE_RESET})
    }
  }, [success, history, dispatch])

  return (
    <LayoutContainer>
      {
        loading && <Loader />
      }
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-2">Add New Dish</h2>
        <div className="form-group mb-4">
          <input className="block w-full h-14 bg-red-200 placeholder-gray-500 px-4 py-1 rounded" type="text" placeholder="Dish Name" value={name} onChange={e=> setName(e.target.value)} />
        </div>
        <div className="form-group mb-1">
          {
            recipeIngredient.map((ingredient, index)  => (
              <div key={index} className="row md:flex md:-mx-3 items-center mb-3">
                <div className="col md:w-1/4 md:px-3">
                  <input className="block w-full h-14 bg-red-200 placeholder-gray-500 px-4 py-1 rounded" type="text" placeholder="Ingredient name" name="ingredient_name" value={ingredient.ingredient_name} onChange={e=> handleIngredientChange(index, e)} />
                </div>
                <div className="col md:w-1/4 md:px-3">
                  <input className="block w-full h-14 bg-red-200 placeholder-gray-500 px-4 py-1 rounded" type="text" placeholder="Ingredient quantity" name="ingredient_quantity" value={ingredient.ingredient_quantity} onChange={e=> handleIngredientChange(index, e)} />
                </div>
                <div className="col md:w-1/4 md:px-3">
                  <input className="block w-full h-14 bg-red-200 placeholder-gray-500 px-4 py-1 rounded" type="text" placeholder="Ingredient Unit" name="ingredient_unit" value={ingredient.ingredient_unit} onChange={e=> handleIngredientChange(index, e)} />
                </div>
                {
                  index ? <div className="col md:w-1/4 md:px-3">
                  <div className="text-left"><button className="inline-block p-3 text-red-400 hover:opacity-70" onClick={() => removeMoreIngredientsField(index)}>Remove</button></div>
                </div>: null
                }
              </div>
            ))
          }
          <div className="row flex">
            <div className="col md:w-3/4">
              <div className="text-right"><button className="inline-block p-3 text-red-400 hover:opacity-70" onClick={addMoreIngredientsField}>Add More</button></div>
            </div>
          </div>
        </div>
        <div className="form-group mb-3">
          <h2 className="text-lg font-bold mb-2">Cooking Steps:</h2>
          <div className="input mb-3">
            <textarea className="block w-full h-60 bg-red-200 placeholder-gray-500 px-4 py-1 rounded" placeholder="Write cooking steps" value={recipeInstructions} onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setRecipeInstructions(e.target.value)}></textarea>
          </div>
        </div>
        <div className="form-group mb-4">
          <h2 className="text-lg font-bold mb-2">Upload Dish Image (URL):</h2>
          <input className="block w-full h-14 bg-red-200 placeholder-gray-500 px-4 py-1 rounded" type="text" placeholder="Image URL" onChange={e=> setImage(e.target.value)} />
        </div>
        <Button variant="submit" disabled={!name || !image || !recipeInstructions}>Submit</Button>
      </form>
    </LayoutContainer>
  )
}

export default AddDishContainer
