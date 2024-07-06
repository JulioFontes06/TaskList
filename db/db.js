const Sequelize = require("sequelize")

const connection = new Sequelize('tasklist', 'root', 'lbatatam23@', {
    host: 'localhost',
    dialect: "mysql"
})

module.exports = connection