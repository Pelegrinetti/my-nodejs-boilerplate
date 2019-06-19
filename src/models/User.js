const yup = require('yup')
const bcrypt = require('bcryptjs')
const { Schema, model } = require('../database')

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
}, {
  timestamps: true
})

UserSchema.pre('validate', async function (next) {
  try {
    await yup
      .object()
      .shape({
        username: yup
          .string()
          .required()
          .min(3)
          .max(60),
        email: yup
          .string()
          .required()
          .email()
          .max(60),
        password: yup
          .string()
          .required()
          .min(6)
          .max(25)
      })
      .validate(this)
    next()
  } catch (error) {
    next(error)
  }
})

UserSchema.pre('save', async function (next) {
  const token = await bcrypt.hash(this.password, 10)
  this.password = token

  next()
})

module.exports = model('User', UserSchema)
