const Vehicle = require('../models/Vehicle')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { APIError } = require('../errors')

const getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find({}).populate('owners', {username:1, name:1})
  res.status(StatusCodes.OK).json({ success: true, data: vehicles })
}

const createVehicle = async (req, res) => {
  const { make, model, license_plate, userId } = req.body
  const user = await User.findById(userId)
  if (!make || !model) {
    // replace following with BadRequest error
    throw new APIError('Must provide make and model',StatusCodes.BAD_REQUEST)
  }
  const type = req.body.type || (Math.round(Math.random()) > 0 ? 'Van' : 'Passenger car')
  const vehicle = new Vehicle({
    make,
    model,
    type,
    license_plate,
    owners: user._id
  })
  const savedVehicle = await vehicle.save()
  user.vehicles = user.vehicles.concat(savedVehicle._id)
  await user.save()
  return res.status(StatusCodes.CREATED).send({ success: true, data: savedVehicle })
}

const getSingleVehicle = async (req, res) => {
  const { id } = req.params
  try {
    const vehicle = await Vehicle.findById(id)
    if (!vehicle) {
      // replace following with NotFound error
      return res
      //eslint-disable-next-line
      .status(StatusCodes.NOT_FOUND).json({ success: false, msg: `No vehicle found with id ${id}` })
    }
    return res.status(StatusCodes.OK).json({ success: true, data: vehicle })
  } catch (error) {
    console.log(error)
  }
}

const updateVehicle = async (req, res) => {
  const { id } = req.params
  const { make } = req.body

  const vehicle = await Vehicle.findById(id)
  if (!vehicle) {
    // replace following with NotFound error
    return res
    //eslint-disable-next-line
    .status(StatusCodes.NOT_FOUND).json({ success: false, msg: `No vehicle found with id ${id}` })
  }
  vehicle.make = make
  const updatedVehicle = await vehicle.save()
  return res.status(StatusCodes.OK).json({ success: true, data: updatedVehicle })
}
  
const deleteVehicle = async (req, res) => {
  const { id } = req.params
  const vehicle = await Vehicle.findById(id)
  if (!vehicle) {
    // replace following with NotFound error
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, msg: `No vehicle found with id ${id}` })
  }
  await Vehicle.findByIdAndRemove(id)
  res.status(StatusCodes.OK).json({ success: true })
}

module.exports = {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle
}
