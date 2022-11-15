// const temps= "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving".replace(/ /g,' ')

// console.log(temps.split(','))

const axios= require('axios');
//const { Dog, Temperaments }= require('../db');


const getTemperament= async()=>{
    const apiInfo= await axios.get('https://api.thedogapi.com/v1/breeds');
    const doggys= apiInfo.data.map(temp=> temp.temperament?.replace(/ /g,' ').split(','))
    let temperaments= []
    for( let i= 0; i < doggys.length; i ++){
        for ( let j= 0; j< doggys[i].length; j++){
            
            if(doggys[j] !== temperaments[i]){
                temperaments.push[i]
            }
        }
    }
    console.log(temperaments)
}

getTemperament()