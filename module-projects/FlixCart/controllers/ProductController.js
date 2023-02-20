const { Product } = require('../models/index')

const getProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.render('item', { product })
  } catch (error) {
    throw error
  }
}

const deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    })
    res.sendStatus(201)
  } catch (error) {
    throw error
  }
}

const getUpdateForm = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id)
    res.render('update', { product })
    console.log(product)
  } catch (error) {
    throw error
  }
}
const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: { id: req.params.id }
    })
    res.send('Product has been updated')
  } catch (error) {
    throw error
  }
}

const getCreateForm = async (req, res) => {
  try {
    res.render('addnewproduct')
  } catch (error) {
    throw error
  }
}

const createProduct = async (req, res) => {
  try {
    await Product.create(req.body)
    res.render('homepage')
  } catch (error) {
    throw error
  }
}

// Controller used for server-side development

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  getUpdateForm,
  getCreateForm,
  createProduct
}
