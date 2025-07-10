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
}