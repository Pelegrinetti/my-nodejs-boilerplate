const router = require('express').Router()

const configs = require('./configs')

const UserController = require('./controllers/UserController')
const AuthController = require('./controllers/AuthController')

const Auth = require('./middlewares/auth')

router.get('/', (req, res) => {
  return res.send(`{ api_version: ${configs.app.version} }`)
})

router.post('/login', AuthController.login)

router.get('/auth', Auth, (req, res) =>
  res.send(`You are logged: ${req.userId}`))

router.route('/user')
  .post(UserController.create)
router.route('/user/:id')
  .get(UserController.read)
  .put(UserController.update)
  .delete(UserController.destroy)

module.exports = router
