'use strict'

var app=require('./app');
var connection=require('./dbConnection');

var port=4200;

connection.connect((err)=>{
	if(err)
		return	console.error("MYSQL===> ",err);
	app.listen(port,(err)=>{
		if(err)
			return console.error("PORT===> ",port);
	});
});
