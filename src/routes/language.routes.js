//Enrutador propio del modulo de express
import { Router } from "express";

//importación de los controladores para los lenguajes de programación
import {createLanguage, updateLanguage, deleteLanguage} from "../controllers/language.controllers.js";

export const languageRoutes = Router();

//Metodos para crear, actualizar por id, traer todos, traer por id y eliminar por id
languageRoutes.post("/languages", createLanguage);
// languageRoutes.get("/languages", updateLanguage);
languageRoutes.put("/languages/:id", updateLanguage);
// languageRoutes.get("/languages/:id", updateLanguage);
languageRoutes.delete("/languages/:id", deleteLanguage);
