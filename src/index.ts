import express from "express";
import bodyParser from 'body-parser';
import dotenv from "dotenv";

import connection from "./db/conection";

dotenv.config();

const app = express().use(bodyParser.json());

const PORT: number = parseInt(process.env.PORT || "10101");

// Función para conectar a la base de datos
function connectDB() {
  connection.connect((err) => {
    if (err) {
      console.error("Error al conectar a la base de datos:", err);
    } else {
      console.log("Conectado a la base de datos exitosamente");
    }
  });
}

// Llamada para conectar a la base de datos
connectDB();

// Iniciar el servidor
app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
