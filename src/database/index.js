const mongoose = require('mongoose')

const configs = require('../configs')
const logger = require('../services/logger')

mongoose.connect(`${configs.db.uri}:${configs.db.port}/${configs.db.database}`, {
  useNewUrlParser: true,
  useCreateIndex: true
}, error => {
  if (error) {
    console.log('💢 Error connecting to database')
    logger.error({
      error
    })
    process.exit(1)
  } else {
    console.log('🍃 Connected to database')
  }
})

module.exports = mongoose
