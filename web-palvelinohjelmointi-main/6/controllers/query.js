const { StatusCodes } = require('http-status-codes')
const Vehicle = require('../models/Vehicle')

const query = async (req, res) => {
  // looking for the search phrase in req.query
  const { search } = req.query

  if (search) {
    const vehicles = await Vehicle.find({$or: [{make: {$regex: `${search}` }}, {model: {$regex: `${search}`} }]})

    if (vehicles.length < 1) {
      return res.status(StatusCodes.OK).json({ success: true, data: [] })
    }
    res.status(StatusCodes.OK).json({ success: true, data: vehicles })
  }
}

module.exports = { query }