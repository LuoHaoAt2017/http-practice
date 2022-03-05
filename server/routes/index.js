const express = require("express");
const Router = express.Router;
const router = new Router();
const { Employe } = require('../model');

router.get("/hello", function (req, res) {
  // 缓存十秒钟
  res.set("Cache-control", "public, max-age=10");
  res.status(200).send("hello world");
});

router.get("/user", function (req, res) {
  res.status(200).send("hello world");
});

router.post("/user", function (req, res) {
  res.status(200).send("hello world");
});

router.delete("/user", function(req, res) {
  res.status(200).send("hello world");
});

module.exports = router;