const express = require('express')
const morgan = require('morgan')

const logger = require('./services/logger')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('combined', { stream: logger.stream }))
app.use(require('./middlewares/newError'))

app.use('/api', require('./routes'))

module.exports = app
