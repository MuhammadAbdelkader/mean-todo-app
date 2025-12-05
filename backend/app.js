require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const todoRoutes = require('./routes/todo.routes');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Root Route
app.get('/', (req, res) => {
  res.json({ message: "To-Do API is running" });
});

module.exports = app;
