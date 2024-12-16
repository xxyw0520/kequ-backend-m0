const express = require('express');
const path = require('path');
const indexRoutes = require('./routes/index');

const app = express();

// 中间件：解析 JSON 请求体
app.use(express.json());

// // 路由：定义根路径请求的处理
// app.get('/', (req, res) => {
//   res.send('Hello, Express!');
// });

// 使用路由
app.use('/', indexRoutes);

// // 示例：返回静态文件
// app.use(express.static(path.join(__dirname, '../public')));

// 启动服务
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
