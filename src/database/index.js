const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');

const User = require('../app/models/user');
const Category = require('../app/models/category');
const Playbook = require('../app/models/playbook');

const models = [User, Category, Playbook];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
