const axios = require('axios');
const { Router }= require('express')
const router = Router()
const getApi = require('../controllers/getApi');
require('dotenv').config();
const { API_URL }= process.env;
const { dogInfo } = require('../controllers/getApi')

//breedsRouter.get('/', async (req,res)=>{
//})

//ES UN ARRAY DE OBJETOS, tengo que recorrerlo con un for y traer los datos, mostar:
// Imagen
// Nombre
// Temperamento
// Peso
router.get('/dogs', async(req, res)=>{

    const allDogs= await getApi()
    try{
        res.send(allDogs)
    }
    catch(error){
    res.status(404).send('No funka')
}})


module.exports= router;