const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { StatusCodes } = require('http-status-codes')

const getUsers = async (req,res) => {
  const users = await User.find({}).select('name vehicles').populate('vehicles', {make:1, license_plate:1})
  res.status(StatusCodes.OK).json({ users })
}

const createUser = async (req,res) => {
  const { username, name, email, password, passwordconf } = req.body
  const userExists = await User.findOne({ username })
  const emailExists = await User.findOne({ email })
  const passwordconfirmation = password != passwordconf
  if (passwordconfirmation) {
    return res.status(StatusCodes.CONFLICT).send({ success : false, msg:'Passwords dont match'})
  }
  if (userExists) {
    return res.status(StatusCodes.CONFLICT).send({ success : false, msg:`User already exists: ${username}`})
  }
  
  if (emailExists) {
    return res.status(StatusCodes.CONFLICT).send({ success : false, msg:`Email already exists: ${email}`})
  }
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  
  const user = new User({
    username,
    name,
    email,
    passwordHash,
    passwordconf,
  })

  await user.save()
  res.status(StatusCodes.CREATED).json({ user })
}

const getSingleUser = async (req,res) => {
  const { id } = req.params
  const user = await User.findById(id)
  if (!user) {
    // replace with NotFound error
    return res.status(StatusCodes.NOT_FOUND).send({success: false, msg: 'No such user'})
  }
  res.status(StatusCodes.OK).json({ user })
}


module.exports = {
  getUsers,
  createUser,
  getSingleUser
}