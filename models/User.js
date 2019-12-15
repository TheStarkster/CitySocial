const Sequelize = require('sequelize');
const db = require('../config/connection/db');

const User = db.define('users', {
    FName: {
        type: Sequelize.STRING
    },
    LName: {
        type: Sequelize.STRING
    },
    id: {
        type: Sequelize.BIGINT,
        primaryKey:true
    },
})

module.exports = User