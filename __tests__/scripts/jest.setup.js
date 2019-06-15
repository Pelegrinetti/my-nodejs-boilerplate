const truncate = require('../utils/truncate')

beforeAll(async () => {
  await truncate()
})

afterAll(async () => {
  await truncate()
})
