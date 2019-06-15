const router = require('express').Router()

const configs = require('./configs')

const UserController = require('./controllers/UserController')

router.get('/', (req, res) => {
  return res.send(`{ api_version: ${configs.app.version} }`)
})

router.route('/user')
  .post(UserController.create)
router.route('/user/:id')
  .get(UserController.read)
  .put(UserController.update)
  .delete(UserController.destroy)

module.exports = router
