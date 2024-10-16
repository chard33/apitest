const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Pagina inicio")
})

app.get("/cartas", (req, res) => {
    res.send("Conexion a base de datos") 
})

module.exports = app