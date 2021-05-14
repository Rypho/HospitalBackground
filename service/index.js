//node后端
const db=require('./db.js');//数据库连接信息
const mysql=require('mysql');
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(express.static('../dist'));
const server = require('http').createServer(app);

const conn = mysql.createConnection(db.mysql);
conn.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 后端api路由
app.use('/api/user', userApi);

// 监听端口
app.listen(3000);

console.log('success listen at port:3000');
