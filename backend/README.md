# To-Do List Application - Backend API

RESTful API server for MEAN Stack To-Do Application built with Express.js and MongoDB.

**Project for:** Intent 3D - Startup
**Developer:** Mohamed Abdelkader
**Delivery Date:** November 28, 2025

---

## 📋 Project Overview

Express.js backend API that manages to-do items with full CRUD operations. Connects to MongoDB for data persistence and serves the Angular frontend.

## 🌐 Live Deployment

**API URL:** https://mean-todo-app-sigma.vercel.app/

**Status:** ✅ Live and Running

---

## 🛠 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Vercel** - Deployment platform

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/todos` | Retrieve all todos | - |
| POST | `/api/todos` | Create new todo | `{ "text": "Todo text" }` |
| PUT | `/api/todos/:id` | Update existing todo | `{ "text": "Updated text" }` |
| DELETE | `/api/todos/:id` | Delete todo | - |

**Base URL:** `https://mean-todo-app-sigma.vercel.app`

---

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

---

## ⚙️ Environment Variables

Create a `.env` file with:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

---

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
├── vercel.json           # Vercel configuration
└── server.js             # Application entry point
```

---

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

---

## 🧪 Testing API

**Get all todos:**
```bash
GET https://mean-todo-app-sigma.vercel.app/api/todos
```

**Create todo:**
```bash
POST https://mean-todo-app-sigma.vercel.app/api/todos
Content-Type: application/json

{
  "text": "Buy groceries"
}
```

**Update todo:**
```bash
PUT https://mean-todo-app-sigma.vercel.app/api/todos/{id}
Content-Type: application/json

{
  "text": "Buy groceries and cook dinner"
}
```

**Delete todo:**
```bash
DELETE https://mean-todo-app-sigma.vercel.app/api/todos/{id}
```

---

## 🌐 Deployment on Vercel

### Automatic Deployment

1. **Connect Repository:**
   - Link GitHub repository to Vercel
   - Auto-deploy on git push

2. **Environment Variables:**
   - Add `MONGODB_URI` in Vercel dashboard
   - Settings → Environment Variables

3. **Configuration:**
   - `vercel.json` handles routing
   - Serverless functions automatically configured

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

---

## 📝 Features Delivered

✅ RESTful API with Express.js
✅ MongoDB database integration
✅ CRUD operations (Create, Read, Update, Delete)
✅ Error handling
✅ CORS enabled for frontend connection
✅ Clean and maintainable code structure
✅ Deployed on Vercel with automatic scaling
✅ Production-ready with environment variables

---

## 🔒 Security Notes

- Never commit `.env` file to version control
- Keep MongoDB credentials secure
- Use environment variables on Vercel dashboard
- CORS configured for frontend domain only

---

## 📊 Performance

- **Response Time:** < 200ms average
- **Uptime:** 99.9% (Vercel SLA)
- **Auto-scaling:** Handles traffic spikes automatically
- **Global CDN:** Low latency worldwide

---

## 🐛 Troubleshooting

**MongoDB Connection Issues:**
- Verify MongoDB URI in Vercel environment variables
- Check MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for Vercel)

**CORS Errors:**
- Ensure frontend URL is whitelisted in CORS configuration
- Check that requests include proper headers

**404 Errors:**
- Verify `vercel.json` routes configuration
- Check API endpoint paths match documentation

---

## 📄 License

MIT License - Free to use and modify

---

**Developed by Mohamed Abdelkader**
Delivered for Intent 3D - Startup

**Live API:** https://mean-todo-app-sigma.vercel.app/
**Status:** Production Ready ✅
