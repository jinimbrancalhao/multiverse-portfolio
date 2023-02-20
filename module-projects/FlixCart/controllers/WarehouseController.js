const { Warehouse, Product } = require('../models/index')

const getWarehouseProducts = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByPk(req.params.id)
    const products = await warehouse.getProducts()
    res.render('inventory', { products, warehouse })
  } catch (error) {
    throw error
  }
}

// Controllers used for server-side development

const getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.findAll()
    res.send(warehouses)
  } catch (error) {
    throw error
  }
}

const addWarehouseProduct = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByPk(req.params.warehouseId)
    const product = await Product.findByPk(req.params.productId)
    await warehouse.addProduct(product)
    res.send('Product has been added')
  } catch (error) {
    throw error
  }
}

module.exports = {
  getWarehouseProducts,
  getWarehouses,
  addWarehouseProduct
}
