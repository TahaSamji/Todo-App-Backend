const express = require("express");
const cors = require("cors");
const { initializeDB } = require("./db");
require("dotenv").config();

const app = express();
const corsOptions = {
  origin: true,  // Allows any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

initializeDB().then(() => {
  console.log("Database initialized");
});


app.use("/api/todos", require("./todoRoute"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));