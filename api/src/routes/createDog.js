const { Router } = require("express");
const routerCreate = Router();
//const postDog= require('../controllers/postDog')
const { Dog, Temperaments } = require("../db");  // db.js
// const
// routerCreate.post('/createDog', async (req,res)=>{
//     const {name, heightMin, heightMax,  weightMin,weightMax,age, image }
// })

routerCreate.post("/dogs", async (req, res) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    age,
    image,
    temperaments,
  } = req.body;
  if (
    name &&
    heightMin &&
    heightMax &&
    weightMin &&
    weightMax &&
    age &&
    image &&
    temperaments
  ) {
  
    const doggy = await Dog.create({
      name,
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      age,
      image,
    });
    const addTemps = await Temperaments.findAll({
      where: {
        name: temperaments,
      },
      
    });
    await doggy.addTemperaments(addTemps);
    res.send(doggy);
   console.log(addTemps)
  }
});
module.exports = routerCreate;
