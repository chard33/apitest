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

app.post("/cartas", (req, res) => {
    const { titulo, precio, imagen } = req.body  // Extraer datos del cuerpo de la solicitud

    if (!titulo || !precio || !imagen) {
        return res.status(400).json({ error: "Faltan campos obligatorios" })
    }

    const sql = "INSERT INTO `cartas` (titulo, precio, imagen) VALUES (?, ?, ?)"
    const values = [titulo, parseFloat(precio.toFixed(2)), imagen]

    conexion.query(sql, values, (err, result) => {
        if (err) throw err.cause

        res.status(201).json({ message: "Carta agregada correctamente", id: result.insertId })
    })
})

app.delete("/cartas/:id", (req, res) => {
    // Obtener el ID desde los headers de la solicitud
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({ error: "El ID es obligatorio en los headers" });
    }

    const sql = "DELETE FROM `cartas` WHERE id = ?";
    
    conexion.query(sql, [id], (err, result) => {
        if (err) err.cause

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Carta no encontrada" });
        }

        res.status(200).json({ message: `Carta con ID ${id} eliminada correctamente` });
    });
});

app.get("/cartas", (req, res) => {

    res.setHeader('Content-Type', 'application/json')

    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) err.cause

        res.json(result);
    })
})

app.get("/imagenes", (req, res) => {

    res.setHeader('Content-Type', 'application/json')

    conexion.query("SELECT * FROM `imagenes`", (err, result) => {
        if (err) err.cause

        res.json(result);
    })
})

module.exports = app