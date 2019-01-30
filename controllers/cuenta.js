'use strict'

var modelCuenta=require('../models/cuenta');

module.exports={
	getCuenta:(req,res)=>{
		if(req.params.id){
			modelCuenta.getCuentaById(req.params.id,(err,resp)=>{
				if(err)
					return res.sendStatus(500);
				if(!resp)
					return res.sendStatus(404);
				return res.type('json').send(resp);
			});
		}
		else{
			modelCuenta.getCuenta((err,resp)=>{
				if(err)
					return res.sendStatus(500);
				if(!resp)
					return res.sendStatus(404);
				return res.type('json').send(resp);
			});
		}
	},
	modifyCuenta:(req,res)=>{
		if(req.body.nombre && req.body.moneda && req.body.saldo){
			modelCuenta.modifyCuenta(req.params.id,req.body,(err,resp)=>{
				if(err)
					return res.sendStatus(500);
				if(!resp)
					return res.sendStatus(404);
				return res.sendStatus(200);
			});
		}else{
				modelCuenta.modifyCuentaSaldo(req.params.id,req.body,(err,resp)=>{
				if(err)
					return res.sendStatus(500);
				if(!resp)
					return res.sendStatus(404);
				return res.sendStatus(200);
				});
		}
	},
	deleteCuentaById:(req,res)=>{
		modelCuenta.deleteCuentaById(req.params.id,(err,resp)=>{
			if(err)
				return res.sendStatus(500);
			if(!resp)
				return res.sendStatus(404);
			return res.sendStatus(200);
		});
	},
	postCuenta:(req,res)=>{
		modelCuenta.postCuenta(req.body,(err,resp)=>{
			if(err)
				return res.sendStatus(500);
			if(!resp)
				return res.sendStatus(404);
			modelCuenta.getCuentaById(resp.insertId,(err,resp)=>{
				if(err)
					return res.sendStatus(500);
				if(!resp)
					return res.sendStatus(404);
				return res.type('json').send(resp);
			});
		});
	}
};
