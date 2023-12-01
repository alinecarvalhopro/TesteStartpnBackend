const Playbook = require('../app/models/Playbook');
const User = require('../app/models/User');
const Category = require('../app/models/Category'); 

const { Sequelize } = require('sequelize');
const connectionDatabase = require('../config/database').sequelize;

const models = [User, Playbook, Category]; 

class Database {
    constructor() {
        this.init();
        this.associateModels();
    }

    init() {
        this.connection = new Sequelize(connectionDatabase);
        models.forEach(model => model.init(this.connection));
    }

    associateModels() {
        User.hasMany(Playbook, { foreignKey: 'userId' });
        Playbook.belongsTo(User, { foreignKey: 'userId' });

        Category.hasMany(Playbook, { foreignKey: 'categoryId' });
        Playbook.belongsTo(Category, { foreignKey: 'categoryId' });
    }
}

export default Database;
