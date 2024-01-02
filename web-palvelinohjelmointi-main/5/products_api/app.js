require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const connectMongoDB = require('./db/connectMongoDB')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware= require('./middleware/error-handler')

app.use(express.json())

app.get('/', (req,res) => {
  res.send('<a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const { MONGO_URI } = process.env
const PORT = process.env.PORT || 5001

const start = async () => {
  try {
    await connectMongoDB(MONGO_URI)
    app.listen(PORT, console.log(`Server on port ${PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}
start()