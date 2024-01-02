const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema ({
  username: { type: String, required: [true, 'A username must be provided'] },
  name: {
    type: String,
    maxlength: [40, 'Name cannot be longer than 40 characters']
  },
  email: {
    type: String,
    required: [true, 'A email must be provided']
  },
  passwordHash: String,
  vehicles: [{ type: Schema.Types.ObjectId, ref: 'Vehicle' }]
})

module.exports = mongoose.model('User', userSchema)