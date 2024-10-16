const express = require("express")
const app = express()

const puerto = process.env.PORT || 3000

app.listen(puerto)

console.log(`Iniciando en el puerto: ${puerto}`)