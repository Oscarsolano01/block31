// Bring in express
const express = require("express");
// create express applciation object
const app = express();
// specify the PORT where our server will run
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("hello from the server, the '/' endpoint");
});

app.get("/books/:id", (req, res) => {
  console.log(req.params.id);
  res.send("here is info for book " + req.params.id);
});

app.get("/accounts/:id/transactions", (req, res) => {
  console.log(req.params.id);
  console.log(req.query.month);
  console.log(req.query.type);

  res.send("here are some transactions");
});

app.listen(PORT, () => {
  console.log(`Server alive on port ${PORT}?!!!`);
});
