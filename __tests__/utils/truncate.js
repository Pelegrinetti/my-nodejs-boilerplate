const database = require('../../src/database')

module.exports = () => {
  return Promise.all(
    database.modelNames().map(key => {
      return database.models[key].deleteMany({})
    })
  )
}
