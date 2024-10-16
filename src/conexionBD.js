const mysql = require("mysql")

const conexion = mysql.createConnection({
    host: "sql5.freesqldatabase.com",
    database: "sql5738105",
    user: "sql5738105",
    password: "7tg7gRZW8c"
})

conexion.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = conexion