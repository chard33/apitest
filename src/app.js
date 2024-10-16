const express = require("express")
const conexion = require("./conexionBD")
const app = express()

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile('/public/index.html', { root: __dirname });
})

app.get("/cartas", (req, res) => {
    conexion.query("SELECT * FROM `cartas`", (err, result) => {
        if (err) throw err;

        res.json(result);
    })
})

module.exports = app