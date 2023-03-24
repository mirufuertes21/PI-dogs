const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// ID *
// Nombre *
// Altura *
// Peso *
// Años de vida

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    heightMin:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    heightMax:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightMin:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weightMax:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image : {
    type :DataTypes.STRING,
  },
  });
};


