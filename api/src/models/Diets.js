const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('diet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    },{timestamps: false})
}