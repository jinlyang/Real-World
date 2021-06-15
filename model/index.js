const mongoose = require("mongoose");

const { dbUrl } = require("../config/config.default");

//链接数据库
mongoose.connect(dbUrl);

const db = mongoose.connection;

// 当链接失败的时候
db.on("error", err => {
  console.log("数据库连接失败！", err);
});

// 当链接成功的时候
db.once("open", function () {
  console.log("数据库连接成功！");
});

// 组织导出模型类
module.exports = {
  User: mongoose.model("User", require("./user"))
};

// // 创建了一个数据模型
// const Cat = mongoose.model("Cat", { name: String });

// // 创建了一个对象
// const kitty = new Cat({ name: "Zildjian" });

// // 保存到数据库
// kitty.save().then(() => console.log("meow"));
