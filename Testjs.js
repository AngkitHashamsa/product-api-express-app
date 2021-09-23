//TODO: to get unique company
// const data = require('./products.json')

// const company = data.map((item) => item.company)
// const rare = [...new Set(company)]
// console.log(rare)

// TODO: for sorting purpose
// const letter = 'name,price'
// const sortLetter = letter.split(',').join(' ')
// console.log(sortLetter)

// TODO: to test page number
// const page = 3
// const limit = 10
// console.log((page - 1) * limit)

// TODO: to test object
// const queryObject = {}
// let dummy = 'price-$gte-30,rating-$gte-4'
// const option = ['price', 'rating']
// dummy = dummy.split(',').forEach((item) => {
//   const [field, operator, value] = item.split('-')

//   if (option.includes(field)) {
//     queryObject[field] = { [operator]: Number([value]) }
//   }
// })
// result: { price: { '$gte': 30 }, rating: { '$gte': 4 } }
// console.log(queryObject)
