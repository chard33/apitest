const express = require("express")
const conexion = require("./conexionBD")
const app = express()
const cors = require("cors")

app.use(cors());

app.get("/cartas", (req, res) => {
    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;

        res.set({
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'warning': "Se asignan los headers"
       })

        res.json(result);
    })
})

module.exports = app