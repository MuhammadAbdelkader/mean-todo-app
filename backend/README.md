# To-Do List Application - Backend API

RESTful API server for MEAN Stack To-Do Application built with Express.js and MongoDB.

**Project for:** Intent 3D - Startup
**Developer:** Mohamed Abdelkader
**Delivery Date:** November 28, 2025

---

## 📋 Project Overview

Express.js backend API that manages to-do items with full CRUD operations. Connects to MongoDB for data persistence and serves the Angular frontend.

## 🛠 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/todos` | Retrieve all todos | - |
| POST | `/api/todos` | Create new todo | `{ "text": "Todo text" }` |
| PUT | `/api/todos/:id` | Update existing todo | `{ "text": "Updated text" }` |
| DELETE | `/api/todos/:id` | Delete todo | - |

## 📦 Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Add your MongoDB URI to .env file
# MONGODB_URI=your_connection_string

# Start server
npm start
```

## ⚙️ Environment Variables

Create a `.env` file with:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js       # MongoDB connection setup
├── models/
│   └── todo.model.js     # Todo data schema
├── routes/
│   └── todo.routes.js    # API route handlers
├── .env                  # Environment variables (not in git)
├── .env.example          # Environment template
├── package.json          # Dependencies
└── server.js             # Application entry point
```

## 🚀 Running the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Server runs on `http://localhost:3000`

## 🧪 Testing API

**Get all todos:**
```bash
GET http://localhost:3000/api/todos
```

**Create todo:**
```bash
POST http://localhost:3000/api/todos
Content-Type: application/json

{
  "text": "Buy groceries"
}
```

**Update todo:**
```bash
PUT http://localhost:3000/api/todos/{id}
Content-Type: application/json

{
  "text": "Buy groceries and cook dinner"
}
```

**Delete todo:**
```bash
DELETE http://localhost:3000/api/todos/{id}
```

## 📝 Features Delivered

✅ RESTful API with Express.js
✅ MongoDB database integration
✅ CRUD operations (Create, Read, Update, Delete)
✅ Error handling
✅ CORS enabled for frontend connection
✅ Clean and maintainable code structure

## 🔒 Security Notes

- Never commit `.env` file to version control
- Keep MongoDB credentials secure
- For production, use environment variables on hosting platform

## 📄 License

MIT License - Free to use and modify

---

**Developed by Mohamed Abdelkader**
Delivered for Intent 3D - Startup
