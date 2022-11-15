const axios= require('axios');
const { Dog, Temperaments }= require('../db');

const getApi= async() => {
    const link= await axios.get('https://api.thedogapi.com/v1/breeds');
    const dogInfo=  link.data.map((dog)=>{
        return {
            id: dog.id,
            name: dog.name,
            temperament: dog.temperament,
            weightMin:dog.weight.imperial[0],
            weightMax:dog.weight.imperial[1],
            //height: dog.height.imperial,
            //age: dog.life_span,
            image: dog.image.url,
        }
    })
    return dogInfo;
}
module.exports= getApi;