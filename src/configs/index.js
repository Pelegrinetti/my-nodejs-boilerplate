require('dotenv').config()

module.exports = {
  app: {
    name: process.env.APP_NAME || 'API',
    key: process.env.APP_KEY || 'secret',
    port: process.env.PORT || 3333,
    version: process.env.APP_VERSION || '1.0.0'
  },
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_DATABASE
  }
}
