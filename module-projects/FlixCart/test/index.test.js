//test file
const { Product, Warehouse } = require('../models/index')
const { db } = require('../db')

describe('Product and Warehouse Associations', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  test('can add product to warehouse', async () => {
    const testProduct = await Product.create({
      name: 'Iphone',
      price: 700,
      description: 'This is a test Iphone of the product class',
      category: 'Phone',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000'
    })

    const testWarehouse = await Warehouse.create({
      location: 'Boston',
      name: 'Warehouse 1'
    })

    await testWarehouse.addProduct(testProduct)
    const warehouseProducts = await testWarehouse.getProducts()
    expect(warehouseProducts.length).toBe(1)
  })
})
