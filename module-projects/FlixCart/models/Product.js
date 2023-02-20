const { db, DataTypes, Model } = require('../db')

class Product extends Model {}

Product.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    sequelize: db
  }
)

module.exports = { Product }
