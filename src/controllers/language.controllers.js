//Importación del modelo de lenguajes de programación
import { Language } from "../models/language.model.js";

//Función para crear un lenguaje
export const createLanguage = async(req, res) => {
    try {
        const {name, paradigm, release_year} = req.body;

        const language = await Language.create({name, paradigm, release_year});
        res.status(201).json({message: "El lenguaje fue creado con éxito", language});
    } catch (error) {
        res.status(500).json({message: "Error al crear el lenguaje", error});
    }
};

export const updateLanguage = async(req, res) => {
    try {
        const {name, paradigm, release_year} = req.body;
        
        // Validacion de titulo unico
        const nameUnique = await Movies.findOne({where: {title}});
        if (nameUnique) return res.status(400).json({message: "El nombre del lenguaje ya existe"});

        const [updated] = await Language.update({name, paradigm, release_year});
        if (updated > 0) return res.status(200).json({message:"El lenguaje fue actualizado con éxito"})
        res.status(404).json({message: "El lenguaje no existe"})
    } catch (error) {
        return res.status(404).json({message: "Ese Lenguaje no existe en la base de datos"});
    }
};

// export const getAllLanguage = async(req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// };

// export const getByIdLanguage = async(req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// };

export const deleteLanguage = async(req, res) => {
    try {
        const deleteLanguage = await Language.destroy({where: {id: req.params.id}});
        if (deleteLanguage) return res.status(200).json({message: "El lenguaje fue eliminado"})
    } catch (error) {
        res.status(500).json({errormessage: err.message});
    }
};