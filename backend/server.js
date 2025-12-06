require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const todoRoutes = require('./routes/todo.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'To-Do API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
