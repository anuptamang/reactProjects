import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc     Fetch all products
// @route    GET /api/products
// @access   Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

// @desc     Fetch single product
// @route    GET /api/products/:id
// @access   Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc     Create a product
// @route    POST /api/products
// @access   Public
const createProduct = asyncHandler(async (req, res) => {
  console.log(req.body)
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    recipeIngredient: req.body.recipeIngredient,
    recipeInstructions: req.body.recipeInstructions,
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

export { getProducts, getProductById, createProduct }
