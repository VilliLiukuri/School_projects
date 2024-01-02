const { APIError } = require('../errors/custom')

// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (err,req,res,next) => {
  console.log(err)
  if(err instanceof APIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'There was an error, please try again' })
}

module.exports = errorHandlerMiddleware

