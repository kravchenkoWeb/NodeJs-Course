const Sequelize = require("sequelize");

const sequelize = new Sequelize('node_complete', 'root', 'karnavalniy33', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;