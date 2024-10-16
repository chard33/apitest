const express = require("express")
const app = express()

const puerto = process.env.PORT || 3000

app.listen(puerto)

app.get("/", (req, res) => {
    res.send("Pagina inicio")
})

app.get("/cartas", (req, res) => {
    res.send("Conexion a base de datos") 
})

console.log(`Iniciando en el puerto: ${puerto}`)