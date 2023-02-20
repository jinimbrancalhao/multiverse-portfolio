//seed file

const path = require('path')
const fs = require('fs').promises
const { db } = require('../db')
const { Warehouse, Product } = require('../models/index')
const { User } = require('../models/User')
const bcrypt = require('bcrypt')

const seed = async () => {
  await db.sync({ force: true })

  const warehousepath = path.join(__dirname, 'warehouse.json')

  const warebuffer = await fs.readFile(warehousepath)

  const { warehousedate } = JSON.parse(String(warebuffer))

  for (waredate of warehousedate) {
    const warehouse = await Warehouse.create(waredate)
    for (productdata of waredate.products) {
      const product = await Product.create(productdata)
      await warehouse.addProduct(product)
    }
  }

  bcrypt.hash('admin', 10, async (err, hash) => {
    await User.create({
      username: 'jinimb',
      password: hash
    })
  })
  bcrypt.hash('admin', 10, async (err, hash) => {
    await User.create({
      username: 'constancen',
      password: hash
    })
  })
  bcrypt.hash('admin', 10, async (err, hash) => {
    await User.create({
      username: 'dianaa',
      password: hash
    })
  })

  console.log('success')
}

module.exports = seed
