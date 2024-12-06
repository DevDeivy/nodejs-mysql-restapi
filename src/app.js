//ES6
import express from 'express'
import employeesRoutes from './routes/employees.routes.js'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', employeesRoutes);
app.use((req,res, next) =>{
    res.status(404).send({
        mensaje: "El endpoint no existe"
    });
});
export default app;