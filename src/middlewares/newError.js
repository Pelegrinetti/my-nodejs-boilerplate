const logger = require('../services/logger')

module.exports = (req, res, next) => {
  /**
     * Send a error for client
     * @param message
     * @param status
     *
     * @return Response
     */
  res.newError = function (message, status = 500) {
    logger.error({ message, status })
    return this.status(status).send({ message })
  }

  next()
}
