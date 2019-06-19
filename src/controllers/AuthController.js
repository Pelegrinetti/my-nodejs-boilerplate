const jwt = require('jsonwebtoken')
const bcryt = require('bcryptjs')

const configs = require('../configs')

const User = require('../models/User')

const makeToken = async (param = {}) => {
  const token = await jwt.sign(param, configs.app.key, { expiresIn: 86400 })

  return token
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.newError('Invalid credentials', 403)
    }

    if (!await bcryt.compare(password, user.password)) {
      return res.newError('Invalid credentials', 403)
    }

    user.password = undefined

    return res.send({
      user,
      token: await makeToken({ id: user._id })
    })
  } catch (error) {
    return res.newError(error.message, 500)
  }
}
