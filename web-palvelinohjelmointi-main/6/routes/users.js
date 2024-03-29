const express = require('express')
const router = express.Router()

const {
  getUsers,
  createUser,
  getSingleUser,
} = require('../controllers/users')


router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getSingleUser)

module.exports = router