const Router = require('express').Router()
const controller = require('../controllers/ProductController')

Router.get('/all', controller.getProducts)
Router.get('/:id', controller.getProduct)
Router.get('/', controller.getCreateForm)
Router.post('/', controller.createProduct)
Router.delete('/:id', controller.deleteProduct)
Router.get('/update/:id', controller.getUpdateForm)
Router.put('/update/:id', controller.updateProduct)

module.exports = Router
