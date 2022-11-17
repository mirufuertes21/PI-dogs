const { Router }= require('express');
const routerTemperaments = Router();
const { Temperaments }= require('../db')  //pa q relacione la tabla

routerTemperaments.get('/temperaments', async(req,res)=>{
    const temps=  await Temperaments.findAll()
    console.log(temps)
    res.send(temps)
    
})

module.exports= routerTemperaments;
