require("dotenv").config();

const express = require("express");

const app = express();

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to my favourite users list");
};

app.get("/", welcome);

const usersHandlers = require("./usersHandlers");

app.get("/api/users", usersHandlers.getUser);
app.get("/api/users/:id", usersHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
