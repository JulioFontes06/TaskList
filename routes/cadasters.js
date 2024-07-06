const express = require("express");
const routes = express.Router();
const Task = require("../db/tasks");

routes.get("/cadastros", (req, res) => {
  res.send("Hello");
});

routes.post("/enviar", (req, res) => {
  const inputTask = req.body.inputTask;

  Task.create({
    task: inputTask,
  }).then(res.redirect("/"))
});

module.exports = routes;
