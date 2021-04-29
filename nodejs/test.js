var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: '666'
});

connection.connect();//建立连接

let sql="select * from lianxi limit 2";

connection.query(sql, function (error, results, fields) {
    console.log(results);
});

connection.end();