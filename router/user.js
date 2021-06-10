const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

// 用户登录
router.post("/users/login", userController.login);

// 用户注册
router.post("/users", userController.register);

// 获取当前用户
router.get("/user", userController.getnowuser);

// 更新用户
router.put("/user", userController.updateuser);

module.exports = router;
