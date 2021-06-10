const express = require("express");
const router = express.Router();
const articlecontroll = require("../controller/article");
// 查询 文章列表
router.get("/", articlecontroll.getArticles);

router.get("/feed", articlecontroll.feed);

router.get("/:slug", articlecontroll.slug);

router.post("/", articlecontroll.getpost);

router.put("/:slug", articlecontroll.putslug);

router.delete("/:slug", articlecontroll.deleteslug);

router.post("/:slug/comments", articlecontroll.postcomments);

router.get("/:slug/comments", articlecontroll.getcomments);

router.delete("/:slug/comments/:id", articlecontroll.deletecomments);

router.post("/:slug/favorite", articlecontroll.postlove);

router.delete("/:slug/favorite", articlecontroll.deletelove);

module.exports = router;
