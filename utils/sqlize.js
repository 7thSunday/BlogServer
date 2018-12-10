const Sequelize = require('sequelize');
const db = require('../config/dbConfig');

var sqlize = new Sequelize(db.database,db.username,db.password,{
    host: db.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 3000
    }
});

module.exports = sqlize;