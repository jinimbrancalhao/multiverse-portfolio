//import our sequelize dependencies
const { Sequelize, DataTypes, Model } = require('sequelize')

//create an instance of our database with sequelize class
const db = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: './cards.sqlite',
  logging: false
})

// export our database
module.exports = { db, DataTypes, Model }

// const path = require('path')
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: path.join(__dirname, 'flixcart.sqlite')
// })

// module.exports = sequelize
