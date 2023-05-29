import { videogames } from "./videogames.js";
import express from "express";

const api = express();

api.get("/", (req, res) => {
    return res.send(videogames)
})

const PORT = process.env.PORT || 3000;

api.listen(PORT, () => {
    console.log(`El servidor esta escuchando en el puerto ${PORT}`);
})