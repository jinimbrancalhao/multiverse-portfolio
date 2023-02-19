//warehouse model
const { db, DataTypes, Model } = require('../db')

class Warehouse extends Model {}

Warehouse.init(
  {
    location: DataTypes.STRING,
    name: DataTypes.STRING
  },
  {
    sequelize: db
  }
)

module.exports = { Warehouse }
