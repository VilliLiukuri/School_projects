require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const connectMongoDB = require('./db/mongodb')
const { PORT, MONGO_URI } = process.env

const vehicles = require('./routes/vehicles')
const users = require('./routes/users')
const login = require('./routes/login')
const query = require('./routes/query')
const errorHandler = require('./middleware/errorHandler')

// static assets
app.use(express.static('./public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/vehicles', vehicles)
app.use('/api/users', users)
app.use('/api/login', login)
app.use('/api/query', query)

app.use(errorHandler)

connectMongoDB(MONGO_URI)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`) 
})
