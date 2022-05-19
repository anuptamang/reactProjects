import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import all sample data
import products from './data/products.js'
import Product from './models/productModel.js'

// import db config
import connectDB from './config/db.js'

// env config
dotenv.config()

// DB connect
connectDB()

// create importData function
const importData = async () => {
  try {
    await Product.deleteMany()

    const sampleProducts = products.map((product) => {
      return { ...product }
    })

    await Product.insertMany(sampleProducts)

    console.log('Data imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// create destroyData function
const destroyData = async () => {
  try {
    await Product.deleteMany()

    console.log('Data destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

// check for the argument given when seeding
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
