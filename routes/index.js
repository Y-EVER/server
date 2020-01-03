var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'property'
});
connection.connect();

router.post('/login',function(req,res){
	var username = req.body.username
	var pwd = req.body.password

	var sql = 'SELECT * FROM user';
	connection.query(sql,(err,data) => {
		if(err) throw err;
		res.send(data)
	});
})

/* GET home page. */

// router.get('/login',function(req,res){
// 	if(req.query.xm == 'zs' && req.query.age == 18){
// 		res.send('登录成功')
// 	}else{
// 		res.send('登录失败')
// 	}
// })

//router.post('index',function(req,res){
//	if(req.body.xm == 'zs' && req.body.age == 18){
//		res.send('登录成功')
//	}else{
//		res.send('登录失败')
//	}
//})

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
