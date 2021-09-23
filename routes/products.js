const express = require('express')
const router = express.Router()
const {
  getAllProduct,
  getStaticProduct,
  getSingleProduct,
} = require('../controllers/products')
router.route('/').get(getAllProduct)
router.route('/static').get(getStaticProduct)
router.route('/:id').get(getSingleProduct)
module.exports = router
