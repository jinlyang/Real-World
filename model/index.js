const mongoose = require("mongoose");
//链接数据库
mongoose.connect("mongodb://localhost:27017/test");

const db = mongoose.connection;

// 当链接失败的时候
db.on("error", err => {
  console.log("数据库连接失败！", err);
});

// 当链接成功的时候
db.once("open", function () {
  console.log("数据库连接成功！");
});

// 创建了一个数据模型
const Cat = mongoose.model("Cat", { name: String });

// 创建了一个对象
const kitty = new Cat({ name: "Zildjian" });

// 保存到数据库
kitty.save().then(() => console.log("meow"));
