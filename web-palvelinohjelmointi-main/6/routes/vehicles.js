const express = require('express')
const router = express.Router()
const authUser = require('../middleware/auth')

const {
  getVehicles,
  createVehicle,
  getSingleVehicle,
  updateVehicle,
  deleteVehicle,
} = require('../controllers/vehicles')


router.get('/', getVehicles)
router.post('/', authUser, createVehicle)
router.get('/:id', getSingleVehicle)
router.put('/:id', authUser, updateVehicle)
router.delete('/:id', authUser, deleteVehicle)

module.exports = router
