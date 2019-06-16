# NodeJS RESTful API Boilerplate 

## Clone repository
Clone this repository if you want rename your API:
```git clone https://github.com/Pelegrinetti/my-nodejs-boilerplate.git nodejs-api```

## Install
Go to the folder and install dependencies:
```cd nodejs-api```
```yarn install```

### Copy *.env.example* to *.env*
Remember: set your environment variables
```cp .env.example .env```

## Run your API:
```yarn start``` or in development ```yarn dev```

# Documentation

## Production libraries
- [Express](https://github.com/expressjs/express)
- [Mongoose](https://github.com/Automattic/mongoose)
- [Yup](https://github.com/jquense/yup)
- [Bcrypt](https://github.com/dcodeIO/bcrypt.js)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Morgan](https://github.com/expressjs/morgan)
- [Winston](https://github.com/winstonjs/winston)
- [Cors](https://github.com/expressjs/cors)

## Development libraries
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Eslint](https://github.com/eslint/eslint)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://github.com/facebook/jest)
- [Nodemon](https://github.com/remy/nodemon/)
- [Supertest](https://github.com/visionmedia/supertest)

## Environment variables
Use dotenv for declare environment variables for application.
Remember: Set your variables in ```./src/configs/index.js``` for share it for application.
### DotEnv example:
```
APP_NAME=API
APP_KEY=hash
APP_VERSION=1.0.0
```
### Config file example:
```javascript
app: {
    name: process.env.APP_NAME || 'API',
    key: process.env.APP_KEY || 'secret',
    port: process.env.PORT || 3333,
    version: process.env.APP_VERSION || '1.0.0'
}
```

## Tests
This boilerplate use Jest for write tests.
### Example:
```javascript
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
```

## Schema validation
This boilerplate use Yup for validations in datas.
### Example:
```javascript
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
```
