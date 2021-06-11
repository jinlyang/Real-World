const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./router");
const errorhandle = require("./mideddleware/errorhandle")
const app = express();
require("./model")
// 日志输出
app.use(morgan("dev"));

// json格式请求体的解析 req.body
app.use(express.json());

// 设置跨域 Access-Control-Allow-Origin为 * 表示跨域请求配置成功
app.use(cors());

const PORT = process.env.PORT || 3000;

// 挂载路由
app.use("/api", router);

// 挂载处理错误异常的中间件
app.use(errorhandle())

app.listen(PORT, () => {
  console.log(`APP run at localhost:${PORT}`);
});
