const Router = require('express').Router()
const ProductRouter = require('./ProductRouter')
const WarehouseRouter = require('./WarehouseRouter')
const UserRouter = require('./UserRouter')
const controller = require('../controllers/UserController')

Router.get('/', controller.redirectSignin)
Router.get('/homepage', controller.getHomePage)

Router.use('/product', ProductRouter)
Router.use('/warehouse', WarehouseRouter)
Router.use('/user', UserRouter)

module.exports = Router
