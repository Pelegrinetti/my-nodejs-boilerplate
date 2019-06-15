const request = require('supertest')

const server = require('../../src/app')

describe('User', () => {
  it('should create a user', async () => {
    const payload = {
      username: 'Username',
      email: 'usermail@mail.com',
      password: 'apassword'
    }

    const response = await request(server)
      .post('/api/user')
      .send(payload)

    expect(response.status).toBe(200)
  })
})
