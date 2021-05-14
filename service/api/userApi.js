const models = require('../db');
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

// 连接数据库
const conn = mysql.createConnection(models.mysql);
conn.connect()
const jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
};

//增加病区信息
router.post('/add', (req, res) => {
  const sql = $sql.user.add;
  const params = req.body;
  console.log(params);
  conn.query(sql, [params.name, params.keshi,params.fuze,params.phone,params.place,params.fangshu,params.chuangwei,], function(err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
})

//显示病区信息
router.get('/show', (req, res) => {
const sql = $sql.user.show
const params = req.body
console.log(params)
conn.query(sql, [params.name, params.keshi,params.fuze,params.phone,params.place,], function (err, result) {
if (err) {
      console.log(err)
   }
   if (result) {
      jsonWrite(res, result)
    }
  })
})

//显示入院信息
router.get('/showB', (req, res) => {
  const sql = $sql.user.showB
  const params = req.body
  console.log(params)
  conn.query(sql, [params.name, params.id,params.bnum,params.tnum,params.high,], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//显示监护信息
router.get('/showC', (req, res) => {
  const sql = $sql.user.showC
  const params = req.body
  console.log(params)
  conn.query(sql, [params.name, params.id,params.bnum,params.temp,params.style,params.time,params.elec,params.ltime,params.bstyle,], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//查询病区信息
router.post('/search', (req, res) => {
  const sql = $sql.user.search
  const params = req.body
  console.log('查询',params)
  conn.query(sql, [params.name,params.keshi,], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//查询入院信息
router.post('/searchB', (req, res) => {
  const sql = $sql.user.searchB
  const params = req.body
  console.log('查询',params)
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//查询监护信息
router.post('/searchC', (req, res) => {
  const sql = $sql.user.searchC
  const params = req.body
  console.log('查询',params)
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//删除病区信息
router.post('/del', (req, res) => {
const sql = $sql.user.del
const params = req.body
console.log('删除', params)
conn.query(sql, [params.id], function (err, result) {
  if (err) {
       console.log(err)
       }
    if (result) {
       jsonWrite(res, result)
     }
      })
})

//删除入院信息
router.post('/delB', (req, res) => {
  const sql = $sql.user.delB
  const params = req.body
  console.log('删除', params)
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

//修改病区信息
router.post('/update', (req, res) => {
  const sql = $sql.user.update
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.name, params.keshi,params.fuze,params.phone,params.place], function (err, result) {
   if (err) {
     console.log(err)
    }
     if (result) {
     jsonWrite(res, result)
      }
    })
})

module.exports = router
