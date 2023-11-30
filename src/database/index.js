const Playbook = require('../app/models/Playbook');
const User = require('../app/models/User');

const { Sequelize } = require('sequelize');
const connectionDatabase = require('../config/database').sequelize;

const models = [User, Playbook]

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
    }
}

export default Database;