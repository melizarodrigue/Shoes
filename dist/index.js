"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const conection_1 = __importDefault(require("./db/conection"));
dotenv_1.default.config();
const app = (0, express_1.default)().use(body_parser_1.default.json());
const PORT = parseInt(process.env.PORT || "10101");
// Función para conectar a la base de datos
function connectDB() {
    conection_1.default.connect((err) => {
        if (err) {
            console.error("Error al conectar a la base de datos:", err);
        }
        else {
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
