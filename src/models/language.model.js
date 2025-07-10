//Importacion del modulo de terceros
import { DataTypes } from "sequelize";
//Importación de sequelize desde la database.js
import { sequelize } from "../config/database.js";

//creación del modelo de ProgrammingLanguage
export const Language = sequelize.define("Language",
    {
        id:{
            type: DataTypes.INTEGER(20),
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paradigm: {
            type: DataTypes.STRING,
            allowNull: false
        },
        release_year: {
            type: DataTypes.INTEGER
        }
    }
);