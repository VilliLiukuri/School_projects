require('express-async-errors')
const config = require('./utils/config')
const express = require('express')
const path = require('path')
const logger = require('morgan')
const connectMongoDB = require('./db/connectMongoDB')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const errorHandler = require('./middleware/errorHandler')
const notFound = require('./middleware/notFound')
const passport = require('passport')

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  name: 'session_id',
  secret: config.SESSION_SECRET || 'super_secret',
  resave: false,
  saveUninitialized: false,
  store: new MongoDBStore({
    uri: config.MONGODB_URI,
    collection: 'passport-sessions',
  }),
  // Enable next line when using https
  // cookie: { secure: true }
}))
app.use(passport.authenticate('session'))
app.use('/', indexRouter)
app.use('/', authRouter)

app.use(notFound)

app.use(errorHandler)

const start = async () => {
  try {
    await connectMongoDB(config.MONGODB_URI)
  } catch (error) {
    console.log(error)
  }
}
start()
module.exports = app
