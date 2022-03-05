const cors = require("cors");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const app = express();

app.use(express.static(path.resolve(__dirname, "assets")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:8090",
    methods: [
      "GET",
      "PUT",
      "POST",
      "PUT",
      "DELETE",
      "CONNECT",
      "OPTIONS",
      "TRACE",
      "PATCH",
    ],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use(router);

app.listen(9000, "localhost", function () {
  console.log("server is listening on 9000");
});

module.exports = app;
