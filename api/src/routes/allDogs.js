//const axios = require('axios');
const { Router }= require('express');
const routerAllDogs = Router()
const { getApiDB } = require('../controllers/getApi');
require('dotenv').config();
const getByName= require('../controllers/getByName')

// routerAllDogs.get('/dogs', async(req, res)=>{

//     const allDogs= await getApi()
//     try{
//         res.send(allDogs)
//     }
//     catch(error){
//     res.status(404).send('No funka')
// }})
// console.log()

routerAllDogs.get('/dogs', async(req, res)=>{
    const { name }= req.query;
        if(!name){
            const allDogs= await getApiDB()
            res.send(allDogs);

        }const allDogs= await getByName(name);
        res.send(allDogs);
})

module.exports= routerAllDogs;