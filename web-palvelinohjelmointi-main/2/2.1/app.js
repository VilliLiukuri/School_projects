const express = require('express')
const app = express()
const { albums } = require('./data')

app.get('/', (req, res) => {
  res.json(albums)
})

const PORT = 5000
app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT}`)
})