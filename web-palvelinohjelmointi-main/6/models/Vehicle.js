const mongoose = require('mongoose')
const { Schema } = mongoose

const vehicleSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    maxLength: 30,
  },
  model: String,
  type: {
    type: String,
    required: true
  },
  license_plate: {
    type: String,
    validate: {
      validator: value => /^[A-ZÅÄÖ]{2,3}-[1-9]{1}[0-9]{0,2}$/.test(value),
      message: props => `${props.value} is not a valid license plate number!`
    },
    required: [true, 'License plate number required'],
    // Unique is NOT A VALIDATOR, creates an index with property UNIQUE if collection is empty
    unique: true,
  },
  owners: [{ type: Schema.Types.ObjectId, ref: 'User'}]
})

module.exports = mongoose.model('Vehicle', vehicleSchema)
