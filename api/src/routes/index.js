const { Router } = require('express');
const dogsRouter= require('./allDogs');
const byId = require('./details');
const createDog= require('./createDog');
const router = Router();
const routerTemperaments =require('./temperaments')
//trae all dogs y dogsByName
router.use('/', dogsRouter)

//trae los detalles por id
router.use('/', byId)

//post de dog
router.use('/', createDog)
    //const {name, heightMin, heightMax, weightMin, weightMax, age, image }=req.body
    //dogCreate= postDog()

router.use('/', routerTemperaments)

module.exports = router;
