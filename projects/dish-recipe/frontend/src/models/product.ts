export interface RecipeIngredient {
  [key:string]: string;
  ingredient_name: string;
  ingredient_quantity: string;
  ingredient_unit: string;
}

export interface Products {
  _id: string,
  name: string;
  image: string;
  recipeIngredient: RecipeIngredient[];
  recipeInstructions: string[]
}