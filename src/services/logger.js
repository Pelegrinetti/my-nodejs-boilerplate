const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  defaultMeta: { date: Date.now },
  transports: [
    new winston.transports.File({ filename: 'log/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'log/all.log' })
  ]
})

logger.stream = {
  write: function (message, encoding) {
    logger.info(message)
  }
}

module.exports = logger
