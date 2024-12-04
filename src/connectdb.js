import {createPool} from 'mysql2/promise'; //createPool es para crear un grupo de conexiones
import {DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT} from '../src/config.js'
// export const pool = createPool({
//     host: 'localhost',
//     user: 'root',   ↓           //Para desarrollo
//     password: 'root',
//     database: 'companydb'
// }); 

export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,                 //Para producción
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
});