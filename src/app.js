const express = require("express")
const conexion = require("./conexionBD")
const app = express()
const cors = require("cors")

app.use(cors());

app.get("/cartas", (req, res) => {
    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;

        res.setHeader("Nuevo headearl", "33"); 

        res.json(result);
    })
})

module.exports = app