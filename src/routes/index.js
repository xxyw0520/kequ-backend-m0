const express = require('express');
const router = express.Router();

// 路由：返回 'Hello, Express!'
router.get('/', (req, res) => {
  res.send('Welcome to the Express backend!');
});

module.exports = router;
