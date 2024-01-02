const router = require('express').Router()
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const { StatusCodes } = require('http-status-codes')
const { APIError } = require('../errors/custom')
const User = require('../models/User')

passport.use(new LocalStrategy( async function verify(username, password, cb) {
  try {
    const user = await User.findOne({ username })
    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      return cb(null, false, { message: 'Incorrect username or password.' })
    }
    return cb(null, user)
  } catch (err) {
    return cb(err)
  }
}))

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username })
  })
})

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user)
  })
})

// eslint-disable-next-line no-unused-vars
router.get('/login', (req, res, next) => {
  res.redirect('/signin.html')
})

router.post('/login/password', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}))

router.post('/logout', (req, res, next) => {
  req.logout( (err) => {
    if (err) { return next(err) }
    res.redirect('/login')
  })
})

// eslint-disable-next-line no-unused-vars
router.post('/register', async (req, res, next) => {
  const { username, name, email, password } = req.body
  const userExists = await User.findOne({ username })
  const emailExists = await User.findOne({ email })
  if (userExists) {
    throw new APIError(`User already exists with username: ${username}`, StatusCodes.CONFLICT)
  }
  if (emailExists) {
    throw new APIError('Email already in use!', StatusCodes.CONFLICT)
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    email,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  res.status(StatusCodes.CREATED).json({ savedUser })
})


module.exports = router