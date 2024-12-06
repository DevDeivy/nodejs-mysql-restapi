import { pool } from "../connectdb.js";
export const getEmployees = async (req, res) => {
  try {
    const [results] = await pool.query("SELECT * FROM employee");
    res.json(results);
  } catch (err) {
    res.status(500).send({
      mensaje: "No se pudo obtener empleados",
    });
  }
};
export const getIdEmployee = async (req, res) => {
  const { id } = req.params; //primera manera
  const [results] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);
  if (!parseInt(id) || results.length <= 0) {
    return res.status(500).send({
      mensaje: "No se pudo encontrar el empleado",
    });
  } else {
    res.json(results);
  }
};
export const createEmployee = async (req, res) => {
  try {
    const { id, name, salary } = req.body;
    if (!name || !salary) {
      return res.status(400).send({
        mensaje: "Faltan campos requeridos (id, name, salary)",
      });
    }
    const [rows] = await pool.query(
      "INSERT INTO employee (id, name, salary) VALUES (?, ?, ?)",[id, name, salary]);
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    console.error("Error en createEmployee:", error); // Log del error
    res.status(500).send({
      mensaje: "Error interno del servidor",
    });
  }
};
export const deleteEmployee = async (req, res) => {
  const id = req.params.id; //segunda manera
  const [results] = await pool.query("DELETE FROM employee WHERE id = ?", [id]);
  if (!parseInt(id) || results.length <= 0) {
    return res.status(500).send({
      mensaje: "No se pudo eliminar empleado",
    });
  } else {
    res.send({
      mensaje: "Empleado eliminado",
    });
  }
};
export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;
  const [results] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",[name, salary, id]);
  if (!parseInt(id) || results.length <= 0 || results.affectedRows <= 0) {
    return res.status(404).send({
      mensaje: "No se pudo actualizar empleado",
    });
  } else {
    res.json({
      id,
      name,
      salary,
    });
  }
};
//Diferentes ejemplos con try catch y condicionales (Es mejor el manejo de errores con try catch)