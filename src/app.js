const express = require("express")
const conexion = require("./conexionBD")
const app = express()

app.get("/", (req, res) => {
    
    res.send("Conexion a base de datos")
})

app.get("/cartas", (req, res) => {
    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;
        console.log(result)
    })
})

module.exports = app