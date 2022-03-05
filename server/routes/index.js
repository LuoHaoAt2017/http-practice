const moment = require("moment");
const express = require("express");
const Router = express.Router;
const router = new Router();
const { User } = require("../model");

router.get("/hello", function (req, res) {
  // 缓存十秒钟
  res.set("Cache-control", "public, max-age=10");
  res.status(200).send("hello world");
});

router.get("/user", async function (req, res) {
  try {
    // 按更新时间生序排序
    const data = await User.findAll({
      order: [
        ['updated_time', 'DESC']
      ]
    });
    res.set("Cache-control", "public, max-age=10000");
    res.set("Last-Modify", moment().toLocaleString());
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/user", async function (req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    await User.create({
      username: username,
      password: password,
    });
    res.status(200).send("新增成功");
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/user", function (req, res) {
  res.status(200).send("hello world");
});

module.exports = router;
