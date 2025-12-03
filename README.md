# MEAN Stack To-Do List Application

A full-stack web application for managing to-do items, built with MongoDB, Express.js, Angular, and Node.js. Features a RESTful API backend and responsive Angular frontend with complete CRUD functionality.

![MEAN Stack](https://img.shields.io/badge/Stack-MEAN-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)

---

## 🎯 Project Overview

**Client:** Intent 3D - Startup
**Developer:** Mohamed Abdelkader
**Delivery Date:** November 28, 2025

A professional to-do list application demonstrating modern full-stack development with the MEAN stack.

---

## ✨ Features

- ✅ Create new to-do items
- ✅ View all to-do items
- ✅ Update existing items
- ✅ Delete completed items
- ✅ Persistent MongoDB storage
- ✅ Responsive Angular UI
- ✅ RESTful API architecture

---

## 🛠 Technology Stack

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- RESTful API design

**Frontend:**
- Angular 17+
- TypeScript
- Reactive programming with RxJS

---

## 📁 Project Structure

```
mean-todo-app/
│
├── backend/                 # Express.js REST API
│   ├── config/             # Database configuration
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   ├── server.js           # Entry point
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend docs
│
└── frontend/               # Angular application
    ├── src/app/            # Application code
    ├── package.json        # Frontend dependencies
    └── README.md           # Frontend docs
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v14 or higher
- MongoDB Atlas account (free tier)
- Angular CLI: `npm install -g @angular/cli`

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/mean-todo-app.git
cd mean-todo-app
```

**2. Setup Backend**
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm start
```
Backend runs on `http://localhost:3000`

**3. Setup Frontend**
```bash
cd frontend
npm install
ng serve
```
Frontend runs on `http://localhost:4200`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create new todo |
| PUT | `/api/todos/:id` | Update todo |
| DELETE | `/api/todos/:id` | Delete todo |

**Full API documentation:** See [backend/README.md](backend/README.md)

---

## 🌐 Deployment

### Backend (Render.com)
```bash
# Free tier, no credit card required
# Deploy from GitHub at render.com
```

### Frontend (Vercel/Netlify)
```bash
# Free tier, auto-deploy from GitHub
# Deploy at vercel.com or netlify.com
```

**Deployment guides:** See respective README files in `backend/` and `frontend/` folders

---

## 📦 Environment Variables

**Backend** requires `.env` file:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

**Frontend** requires `environment.ts` configuration:
```typescript
apiUrl: 'http://localhost:3000/api'
```

---

## 🧪 Testing

**Backend:**
```bash
cd backend
# Test with Postman, curl, or Thunder Client
curl http://localhost:3000/api/todos
```

**Frontend:**
```bash
cd frontend
ng serve
# Open http://localhost:4200
```

---

## 📝 Development

**Run both servers simultaneously:**

Terminal 1 (Backend):
```bash
cd backend && npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend && ng serve
```

---

## 🎨 Code Quality

- ✅ Clean architecture
- ✅ TypeScript type safety
- ✅ Error handling
- ✅ Modular components
- ✅ RESTful API design
- ✅ Comprehensive documentation

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Mohamed Abdelkader

---

## 👨‍💻 Developer

**Mohamed Abdelkader**
- Full-Stack MEAN Developer
- Clean, maintainable code
- Professional delivery

---

## 📧 Support

For questions about this project, please open an issue in the repository.

---

## 🙏 Acknowledgments

- Intent 3D - Startup for the project opportunity
- MEAN Stack community for excellent resources

---

**Built with ❤️ using MongoDB, Express.js, Angular, and Node.js**
