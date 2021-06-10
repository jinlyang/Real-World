const express = require("express");
const router = express.Router();
const profilecontroll = require("../controller/profile");

// 获取指定用户资料
router.get("/:username", profilecontroll.getprofile);

// 关注用户
router.post("/:username/follow", profilecontroll.follow);

//取消关注
router.delete("/:username/follow", profilecontroll.unfollow);

module.exports = router;
