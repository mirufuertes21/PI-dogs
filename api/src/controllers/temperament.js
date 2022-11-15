const axios= require('axios');
const { Dog, Temperaments }= require('../db');


const getTemperament= async()=>{
    const apiInfo= await axios.get('https://api.thedogapi.com/v1/breeds');
    const doggys= apiInfo.data.map(temp=> temp.temperament.replace(/ /g,' ').split(','))

    const dogs= 
}