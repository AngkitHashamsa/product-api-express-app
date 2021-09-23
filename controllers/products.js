const Product = require('../models/product')

const getStaticProduct = async (req, res) => {
  const product = await Product.find({ price: { $lte: 150 } })
    .sort('name')
    .select('name price')
    .limit(10)
    .skip(10)

  res.status(200).json({ success: 'true', product, nHits: product.length })
}

const getAllProduct = async (req, res) => {
  const { featured, company, name, sort, select, numericFilter } = req.query
  const queryObject = {}
  if (featured) {
    queryObject.featured = featured === 'true' ? true : false
  }
  if (company) {
    queryObject.company = company
  }
  if (name) {
    queryObject.name = { $regex: name, $options: 'i' }
  }
  if (numericFilter) {
    const operatingMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    }
    const regEx = /\b(<|>|>=|<=|=)\b/g
    let filter = numericFilter.replace(
      regEx,
      (match) => `-${operatingMap[match]}-`
    )

    const option = ['price', 'rating']
    filter = filter.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-')
      if (option.includes(field)) {
        queryObject[field] = { [operator]: Number([value]) }
      }
    })
  }

  let result = Product.find(queryObject)

  if (sort) {
    let sortedLetter = sort.split(',').join(' ')
    result = result.sort(sortedLetter)
  } else {
    result = result.sort('createAt')
  }
  if (select) {
    let selectLetter = select.split(',').join(' ')
    result = result.select(selectLetter)
  }

  console.log(queryObject)

  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  let skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)

  const products = await result
  res
    .status(200)
    .json({ success: 'true', products, nHits: products.length, page })
}

const getSingleProduct = async (req, res) => {
  const { id: productID } = req.params
  const product = await Product.findOne({ _id: productID })
  res.status(200).json({ product })
}
module.exports = { getAllProduct, getStaticProduct, getSingleProduct }
