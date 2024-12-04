import { Router } from "express"
import {getEmployees, createEmployee, updateEmployee, deleteEmployee, getIdEmployee} from '../controllers/employees.controllers.js'

const router = Router();

router.get('/employees', getEmployees);
router.get('/employees/:id', getIdEmployee);

router.post('/employees', createEmployee);

router.delete('/employees/:id', deleteEmployee);

router.patch('/employees/:id', updateEmployee);

export default router;