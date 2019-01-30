'use strict'
var express=require('express');
var routes=express.Router();

var controllerCuenta=require('../controllers/cuenta');

routes.get('/cuenta/:id?',controllerCuenta.getCuenta);
routes.put('/cuenta/:id',controllerCuenta.modifyCuenta);
routes.delete('/cuenta/:id',controllerCuenta.deleteCuentaById);
routes.post('/cuenta',controllerCuenta.postCuenta);

module.exports=routes;
