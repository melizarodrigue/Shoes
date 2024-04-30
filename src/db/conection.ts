import mysql from 'mysql';

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'meli123',
    database: 'tienda_zapatos'
})

export default conection;