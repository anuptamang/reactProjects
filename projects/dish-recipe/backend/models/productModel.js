import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  recipeIngredient: {
    type: Array,
    required: true,
  },
  recipeInstructions: {
    type: Array,
    required: true,
  },
})

const Product = mongoose.model('Product', productSchema)

export default Product
