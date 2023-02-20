const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.post('/signup', controller.createUser)
Router.get('/signin', controller.getSignIn)
Router.post('/signin', controller.signIn)
Router.get('/signout', controller.signOut)
Router.get('/create-user', controller.getUserForm)
Router.post('/create-user', controller.createUserForm)

module.exports = Router
