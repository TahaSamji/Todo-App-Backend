const { pool } = require("./db");



exports.getTodos = async (req, res) => {
  const result = await pool.query("SELECT * FROM todos");
  res.json(result.rows);
};

exports.createTodo = async (req, res) => {
  const { task } = req.body;
  const result = await pool.query(
    "INSERT INTO todos (task) VALUES ($1) RETURNING *",
    [task]
  );
  res.json(result.rows[0]);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM todos WHERE id = $1", [id]);
  res.json({ message: "Deleted" });
};