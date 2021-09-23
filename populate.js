require('dotenv').config()

const product = require('./models/product')
const productJson = require('./products.json')
const connectDB = require('./db/connect')

const start = async () => {
  try {
    await connectDB(process.env.URL)
    await product.deleteMany()
    await product.create(productJson)
    console.log('success')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
