const axios= require('axios');
const e = require('express');
const { Dog, Temperaments }= require('../db');
const API_KEY= 'live_5Vfvh8NklhRvPggKDRnKDFBHGtoK9CBLT0SMkr7dczLw1ZxPzOF4VcIT6xTZ95sf'

const getApi= async() => {
    const link= await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}/`);

    const dogInfo=  link.data.map((dog)=>{
        // const doggys = apiInfo.data.map((temp) =>
        // temp.temperament?.replace(/ /g, "").split(",")

        return {
            id: dog.id,
            name: dog.name,
            temperament: dog.temperament?.replace(/ /g, "").split(","),
            weightMin:dog.weight.imperial.split(" - ")[0], //  split(" - ") [1,23,5,10]                     // [numero,nuero2][1]
            weightMax:dog.weight.imperial.split(" - ")[1],
            heightMin: dog.height.imperial.split(" - ")[0],
            heightMax: dog.height.imperial.split(" - ")[1],
            age: dog.life_span,
            image: dog.image.url,
        }
    })
    return dogInfo;
}

const getDB= async()=>{
    const dogDB= await Dog.findAll({
        include:{
        model: Temperaments,
        attributes: ['name'],
        through:{ 
            attributes:[]}
        }
    })
//     dogDB= dogDB.map(dog=>{return{
//         id: dog.id,
//         name: dog.name,
//         temperaments:dog.temperaments.map(dog=> {return e.name}).join(','),
//         weightMin: dog.weightMin,
//         weightMax: dog.weightMax,
//         //heightMin: dog.heightMin,
//         //heightMax: dog.heightMax,
//         //age: dog.age,
//         image: dog.image,
//     }})
    return dogDB;
   }

const getApiDB= async ()=>{
    try{
    const api= await getApi();
    const DB= await getDB();
    return [...api, ...DB];
}catch(error){
    console.log('No se pudieron traer los doggys api/db')
 }
}

module.exports= { getApiDB, getApi, getDB };