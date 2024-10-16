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

app.get("/", (req, res) => {

    res.send("Api de prueba para el desafio Alura Geek!")
})

app.get("/cartas", (req, res) => {

    res.setHeader('Content-Type', 'application/json')

    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;

        res.json(result);
    })
})

app.get("/imagenes", (req, res) => {

    res.setHeader('Content-Type', 'application/json')

    conexion.query("SELECT * FROM `imagenes`", (err, result) => {
        if (err) throw err;

        res.json(result);
    })
})

module.exports = app