import { createConnection } from "mysql";

let conexion = createConnection({
    host: "sql5.freesqldatabase.com",
    database: "sql5738105",
    user: "sql5738105",
    password: "7tg7gRZW8c"
})

conexion.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

export default conexion