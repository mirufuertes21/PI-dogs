const axios = require("axios");
const { Temperaments }= require('../db');

const addTempsToDb = async () => {
  const apiInfo = await axios.get("https://api.thedogapi.com/v1/breeds");
  const doggys = apiInfo.data.map((temp) =>
    temp.temperament?.replace(/ /g, "").split(",") //[['2','1'], ['2','2'],uden]
  );
  
  let temperaments = [];
  for (let i = 0; i < doggys.length; i++) {
    if (doggys[i] !== undefined) {
      for (let j = 0; j < doggys[i].length; j++) {
        if (!temperaments.includes(doggys[i][j])) {
          temperaments.push(doggys[i][j]);
        }
      }
    }
  }

//   tempUnicos.forEach(temp => {
//     Temperament.findOrCreate({where:{name: temp}})   
//   });
// }
// agregar a la base de datos
temperaments.forEach(temp=>{
  Temperaments.findOrCreate({where:{name: temp}})
})

  //console.log(temperaments);

///////////////////////// ///////////////////////////////////////////////////////////////////////////

  // let xd = doggys.flat();
  // const no  = new Set(xd)
  // no.delete(undefined)
  // const simon = [...no] 
  // console.log(simon)
 };
module.exports= addTempsToDb
/// invocar una sola vez tu función (fucncion , ()) => invocarla cuando iniciar el server... 








/* 

' tem : dog.tesm  =>  a, b, c'  <p>{temperaments} <p> 

cosnt temperament  = [12,    20]
ming = tem[0]
mhe a = [1]
'12  - 20'  => [0] 1, .split(-)
                [2] 2

                                





*/



