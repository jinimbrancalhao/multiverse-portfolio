const Router = require('express').Router()
const controller = require('../controllers/WarehouseController')

Router.get('/', controller.getWarehouses)
Router.get('/:id', controller.getWarehouseProducts)
Router.put(
  '/add-product/:warehouseId/:productId',
  controller.addWarehouseProduct
)

module.exports = Router
