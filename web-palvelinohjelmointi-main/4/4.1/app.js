const express = require('express')
const app = express()

app.use(express.json())

const albumsRouter = require('./routes/albums')


app.use('/api/albums', albumsRouter)

const PORT = 5001
app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}...`)
})