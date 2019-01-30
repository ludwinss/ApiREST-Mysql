'use strict'
var express=require('express');
var bodyParser=require('body-parser');

var routesCuenta=require('./routes/cuenta');

var app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',routesCuenta);

module.exports=app;
