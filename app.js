const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cadaster = require("./routes/cadasters");
const done = require("./routes/done");

const connection = require("./db/db");
const Task = require("./db/tasks");

app.use(express.static("public"));

connection
  .authenticate()
  .then(() => console.log("> Connected Success"))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", cadaster);
app.use("/", done);

app.get("/", (req, res) => {
  Task.findAll({ raw: true }).then((tasks) => {
    res.render("index", {
      tasks,
    });
  });
});

app.listen(3000, console.log("> Started Server"));
