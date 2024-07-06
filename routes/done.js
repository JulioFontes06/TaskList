const express = require("express");
const routes = express.Router();
const Task = require("../db/tasks");

routes.post("/done/:id", (req, res) => {
  const taskId = req.params.id;

  Task.findOne({ where: { id: taskId } })
    .then((task) => {
      if (task) {
        return task.destroy();
      } else {
        throw new Error("Task not found");
      }
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error processing request");
    });
});

module.exports = routes