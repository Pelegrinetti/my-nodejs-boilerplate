const bcrypt = require('bcryptjs')

const User = require('../models/User')

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body)

    return res.send({ user })
  } catch (error) {
    return res.newError(error.message, 500)
  }
}

exports.read = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })

    return res.send({ user })
  } catch (error) {
    return res.newError(error.message, 500)
  }
}

exports.update = async (req, res) => {
  try {
    const { password } = req.body

    const token = await bcrypt.hash(password, 10)

    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      {
        ...req.body,
        password: token
      },
      {
        new: true
      }
    )

    return res.send({ user })
  } catch (error) {
    return res.newError(error.message, 500)
  }
}

exports.destroy = async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.params.id })
    return res.send({ success: true })
  } catch (error) {
    return res.newError(error.message, 500)
  }
}
