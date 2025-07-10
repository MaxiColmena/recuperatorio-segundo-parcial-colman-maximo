import express from "express";
import { startDB } from "./src/config/database.js";
import { languageRoutes } from "./src/routes/language.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", languageRoutes);

startDB().then( ()=>{
    app.listen(PORT, ()=>{
        console.log("Escuchando en el puerto: ", PORT);
    })
});
