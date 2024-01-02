const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    // eslint-disable-next-line no-useless-escape
    match: /.+\@.+\..+/,
  },
  passwordHash: String
})

const User = mongoose.model('User', userSchema)

module.exports = User