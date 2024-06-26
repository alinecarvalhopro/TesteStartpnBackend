const { Sequelize, Model } = require('sequelize');

class Category extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      userId: Sequelize.INTEGER,
    }, {
      sequelize,
    });
  }
}

module.exports = Category;
