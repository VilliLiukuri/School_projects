// Utility to wipe and import fresh data to MongoDB

require('dotenv').config()

const connectDB = require('./db/connectMongoDB')
const Product = require('./models/Product')

const jsonProducts = require('./mockproducts.json')

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    // Remove existing data
    await Product.deleteMany()
    // Create the data from json file
    await Product.create(jsonProducts)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
