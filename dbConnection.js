'use strict'
var mysql=require('mysql');
var connection=mysql.createConnection({
	host:'localhost',
	port:3306,
	user:'ludwinss',
	password:'ludwinss',
	database:'dbBanco'
});

module.exports=connection;
