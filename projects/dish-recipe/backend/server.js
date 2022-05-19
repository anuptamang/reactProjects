import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path'

import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// app.get('/', (req, res) => {
//   res.send('api is running...')
// })

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)

const __dirName = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirName, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirName, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('api is running...')
  })
}

const PORT = process.env.PORT || 5050

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
