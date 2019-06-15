const app = require('./app')
const configs = require('./configs')

app.listen(configs.app.port, error => {
  if (error) {
    console.log(error.message)
    process.exit(1)
  }

  console.log(`🚀 ${configs.app.name} is running at ${configs.app.port} port...`)
})
