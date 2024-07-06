const Sequelize = require("sequelize");
const connection = require("./db");

const Task = connection.define("task", {
  task: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Task
  .sync({ force: false })
  .then(() => console.log("> Created Table"))
  .catch((err) => console.log(err));

  module.exports = Task