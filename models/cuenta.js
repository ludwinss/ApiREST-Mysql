'use strict'
var connection=require('../dbConnection');

module.exports={
	getCuenta:(err,resp)=>{
		return connection.query("select * from cuenta",err,resp);
	},
	getCuentaById:(id,err,resp)=>{
		return connection.query("select * from cuenta where nro_cuenta=?",[id],err,resp);
	},
	modifyCuenta:(id,cuenta,err,resp)=>{
		let query="update cuenta set nombre=?,moneda=?,saldo=? where nro_cuenta=?";
		return connection.query(query,[cuenta.nombre,cuenta.moneda,cuenta.saldo,id],err,resp);
	},
	modifyCuentaSaldo:(id,cuenta,err,resp)=>{
		if(cuenta.nombre){
			let query="update cuenta set nombre=? where nro_cuenta=?";
			return connection.query(query,[cuenta.nombre,id],err,resp);
		}else{
			if(cuenta.saldo){
				let query="update cuenta set saldo=? where nro_cuenta=?";
				return connection.query(query,[cuenta.saldo,id],err,resp);
			}else{
				let query="update cuenta set moneda=? where nro_cuenta=?";
				return connection.query(query,[cuenta.moneda,id],err,resp);
			}
		}	
	},
	deleteCuentaById:(id,err,resp)=>{
		return connection.query("delete from cuenta where nro_cuenta=?",[id],err,resp);
	},
	deleteCuenta:(err,resp)=>{
		return connection.query("delete from cuenta",err,resp);
	},
	postCuenta:(cuenta,err,resp)=>{
		let query="insert into cuenta (nombre,moneda,saldo) values (?,?,0)";
		return connection.query(query,[cuenta.nombre,cuenta.moneda],err,resp);
	}
};

