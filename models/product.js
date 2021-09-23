const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  price: {
    type: Number,
    required: [true, 'price is required'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
  featured: {
    type: Boolean,
    default: false,
  },
  company: {
    type: String,
    enum: {
      values: ['marcos', 'liddy', 'ikea', 'caressa'],
      message: '{Value} is not supported',
    },
  },
})

module.exports = mongoose.model('Product', productSchema)
