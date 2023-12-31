const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const cors = require('cors')
const { errorHandler } = require('./middleware/error.Middleware')
const connectDB = require('./config/bd')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/movies', require('./routes/movies.Routes'))
app.use('/api/users', require('./routes/users.Routes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Conectado al puersto ${port}`))



