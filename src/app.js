const express = require("express")
const cors = require('cors');
const conexion = require("./conexionBD")
const app = express()

const corsOptions = {
    origin: '*',  // Permitir todos los orígenes
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],  // Headers permitidos
    credentials: true,  // Permitir envío de cookies o credenciales
    maxAge: 3600  // Tiempo en segundos que se cachea la respuesta preflight
};

app.use(cors(corsOptions));

app.get("/cartas", (req, res) => {

    res.set({
        'Content-Type': 'application/json',
        'Warning': 'Este es un header adicional'
    });

    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;

        const headers = response.getHeaders();

        // Printing those headers 
        console.log(headers);

        res.json(result);
    })
})

module.exports = app