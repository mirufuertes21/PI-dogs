const axios = require("axios");
//// https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

//es por query
const getByName = async (search) => {
  try {
    const apiInfo = await axios.get(
      `https://api.thedogapi.com/v1/breeds/search?q=${search}`
    );

    if (apiInfo.data.length) {
      const url = "https://cdn2.thedogapi.com/images/";
      //if(dogName) return res.status(200).send(dogName)
      //dogName.length > 0? res.status(200).send(dogName) :  res.status(404).send(apiInfo);
      const search = apiInfo.data.map((dog) => {
        return {
          id: dog.id,
          name: dog.name,
          temperament: dog.temperament,
          weightMin: dog.weight.imperial[0],
          weightMax: dog.weight.imperial[1],
          //height: dog.height.imperial,
          //age: dog.life_span,
          image: url + dog.reference_image_id+ '.jpg',
        };
      });

      return search;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = getByName;
