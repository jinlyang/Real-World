const express = require("express");
const router = express.Router();

const tagcontroll = require("../controller/tag");
// 用户登录
router.get("/", tagcontroll.getlogin);

module.exports = router;
