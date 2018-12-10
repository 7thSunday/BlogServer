const sqlize = require('../utils/sqlize');
const Sequelize = require('sequelize');

var Test = sqlize.define('test',{
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(50),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(20),
    createAt: Sequelize.BIGINT,
    updateAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
},{
    timestamps: false
});

module.exports = Test;