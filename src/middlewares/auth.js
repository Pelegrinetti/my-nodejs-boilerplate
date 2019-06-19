const jwt = require('jsonwebtoken')

const configs = require('../configs')

module.exports = (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) return res.newError('Token not provided', 403)

  const [ schema, token ] = authorization.split(' ')

  if (schema !== 'Bearer') return res.newError('Token is bad formated', 403)

  if (!token) return res.newError('Invalid token', 403)

  jwt.verify(token, configs.app.key, (error, decoded) => {
    if (error) return res.newError(error.message, 403)

    req.userId = decoded.id
  })

  next()
}
