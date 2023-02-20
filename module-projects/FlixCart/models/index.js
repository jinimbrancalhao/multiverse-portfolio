const { Product } = require('./Product')
const { Warehouse } = require('./Warehouse')

Warehouse.hasMany(Product)
Product.belongsTo(Warehouse)

module.exports = { Warehouse, Product }
