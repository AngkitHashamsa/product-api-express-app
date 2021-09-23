require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const port = process.env.Port || 5000
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const router = require('./routes/products')
const cors = require('cors')
app.use(cors())
// connect db
const connectDB = require('./db/connect')
// middleware
app.use(express.json())
app.get('/', (req, res) => {
  res
    .status(200)
    .send(`<h2>Get prodcuts</h2> <a href="/api/v1/products">get product</a>`)
})
app.use('/api/v1/products', router)
// not found
app.use(notFoundMiddleware)
// handle Error
app.use(errorHandlerMiddleware)
const start = async () => {
  try {
    // connect db
    await connectDB(process.env.URL)
    app.listen(port, () => {
      console.log(`server is listening on port :${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
