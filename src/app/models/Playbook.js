const { Sequelize, Model } = require('sequelize');

class Playbook extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      description: Sequelize.STRING,
      userId: Sequelize.INTEGER,
      categoryId: Sequelize.INTEGER
    }, {
      sequelize,
    });
  }
}

module.exports = Playbook;

