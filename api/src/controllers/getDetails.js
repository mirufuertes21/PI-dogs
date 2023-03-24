const axios = require("axios");
const { getApi }= require('./getApi')
const { getDB }= require('./getApi')

const getDetails= async(id)=>{ /// 
        try {
            if (/^[0-9]+$/.test(id)) {
                const dogsApi = await getApi()
                const filterApi= dogsApi.filter(dog=> dog.id == id)
                return filterApi ; 
              }
              const dogsDB= await getDB()
              const filterDB= dogsDB.filter(dog=> dog.id == id)
              return filterDB;
            }
        catch (error) {
            console.log(error);
        }
    }
module.exports= getDetails;

   // typeof(id)  ==> typo en un cadena 
            // typeof(3) => 'number'
            // typeof('2') => string
            
            // si el id recibido tiene letras corresponde a un uuid   entonces buscar en la base de datos de lo contrario buscar en api








             //  perros [base, api] => buscar por id => retornar el perro [..base,...api]  [...base]  
            // type === uuid Number('abc') => n 
            // dogs/id => id => string  => Number(id) => numero   
            //                               Number("13s_s2d") => 'numero" => uuid ??
            // id 
            //  lenght => 5 uuid  //  === 'uuid'
            //  