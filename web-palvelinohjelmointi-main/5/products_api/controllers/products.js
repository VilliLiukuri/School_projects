const APIError = require('../errors/apierror')
const Product = require('../models/Product')

const getAllProducts = async (req,res) => {
  const { color, department, productName, numericFilters, sort, errortesti, fields} = req.query
  if (!errortesti) {
    throw new APIError('No errortesti in query string', 400)
  }
  console.log(numericFilters)
  const queryObject = {}
  if (color) queryObject.color = color
  if (department) queryObject.department = department
  if (productName) queryObject.productName = { $regex: productName, $options: 'i' }
  if (numericFilters) {
    const operatorMap = {
      '>' : '$gt',
      '>=' : '$gte',
      '=' : '$eq',
      '<' : '$lt',
      '<=' : '$lte',
    }
    const regEx = /\b(>|>=|=|<|<=)\b/g
    let filters = numericFilters.replace(regEx,(match) => `-${operatorMap[match]}-`)
    console.log(filters)
    const options = ['price','quantity']
    filters = filters.split(',').forEach((item) => {
      const [field,operator,value] = item.split('-')
      if (options.includes(field)) {
        queryObject[field] = {[operator] : Number(value)}
      }
    })
  }
  console.log(queryObject)
  let result = Product.find(queryObject)
  if (fields) {
    const fieldsort = {color: 1}
    result = result.fields(fieldsort)
  }
  if (sort) {
    const sortList = sort.split(',').join(' ') // product,-color -> product -color
    result = result.sort(sortList)
  }
  else {
    result = result.sort('price')
  }
  const products = await result
  res.status(200).json({ products, nbHits: products.length })
}

module.exports = { getAllProducts }