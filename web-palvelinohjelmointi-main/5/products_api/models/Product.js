const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, 'Product must have a name'],
  },
  product: {
    type: String,
    required: [true, 'Product must have a category'],
  },
  price: {
    type: Number,
    required: [true, 'Product must have a price']
  },
  productMaterial: {
    type: String,
  },
  department: {
    type: String,
    enum: {
      values: ['Computers', 'Books', 'Clothing', 'Automotive', 'Jewelery', 'Home', 'Sports', 'Music', 'Industrial', 'Baby', 'Outdoors', 'Kids', 'Beauty', 'Health', 'Tools'],
      message: '{VALUE} not a valid department'
    }
  },
  color: {
    type: String,
  },
})

module.exports = mongoose.model('Product', productSchema)