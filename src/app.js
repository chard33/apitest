const express = require("express")
const cors = require('cors');
const conexion = require("./conexionBD")
const app = express()

app.use(cors()); 

app.get("/cartas", (req, res) => {

    res.header('Content-Type', 'application/json');
    res.header('Warning', 'Se asignan los headers');

    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;

        res.json(result);
    })
})

module.exports = app