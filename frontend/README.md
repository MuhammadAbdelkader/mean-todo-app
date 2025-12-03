# TaskFlow - Frontend Application

Modern Angular 20 frontend for the MEAN Stack To-Do List application. Built with standalone components, modern control flow syntax, and responsive Bootstrap design.

**Project for:** Intent 3D - Startup
**Developer:** Mohamed Abdelkader
**Delivery Date:** November 28, 2025

---

## 🚀 Tech Stack

- **Angular 20** - Modern frontend framework
- **TypeScript** - Type-safe JavaScript
- **Bootstrap 5** - Responsive UI framework
- **Font Awesome** - Professional icons
- **RxJS** - Reactive programming
- **HttpClient** - API communication

---

## ✨ Features

- ✅ **Create Tasks** - Add new to-do items with a simple form
- ✅ **View Tasks** - Display all tasks in a clean list
- ✅ **Edit Tasks** - Inline editing with save/cancel options
- ✅ **Delete Tasks** - Remove completed tasks with confirmation
- ✅ **Real-time Updates** - Instant feedback on all actions
- ✅ **Loading States** - Visual indicators during API calls
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Responsive Design** - Works on all devices
- ✅ **Modern UI** - Clean, professional interface

---

## 🎨 Modern Angular 20 Features

- **Standalone Components** - No NgModule required
- **Control Flow Syntax** - `@if` and `@for` instead of `*ngIf` and `*ngFor`
- **Modern DI** - `inject()` function for dependency injection
- **Signals Ready** - Future-proof architecture
- **Optimized Performance** - Tree-shakeable imports

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── todo-list/
│   │       ├── todo-list.component.ts      # Main component logic
│   │       ├── todo-list.component.html    # Template with @if/@for
│   │       └── todo-list.component.css     # Component styles
│   ├── services/
│   │   └── todo.service.ts                 # HTTP service for API calls
│   ├── models/
│   │   └── todo.ts                         # TypeScript interface
│   ├── app.component.ts                    # Root standalone component
│   └── app.config.ts                       # Application configuration
├── environments/
│   └── environment.ts                      # Environment variables
├── assets/                                 # Static assets
├── styles.css                              # Global styles
└── index.html                              # Entry HTML file
```

---

## 🛠 Installation

### Prerequisites
- Node.js v18 or higher
- Angular CLI v20: `npm install -g @angular/cli`

### Setup Steps

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
ng serve
```

Application runs on `http://localhost:4200`

---

## ⚙️ Configuration

### Environment Variables

Edit `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

**For production**, update `environment.prod.ts` with your deployed backend URL.

---

## 🔌 API Integration

The frontend connects to the Express.js backend via HTTP service:

| Service Method | HTTP Method | Endpoint | Description |
|----------------|-------------|----------|-------------|
| `getTodos()` | GET | `/api/todos` | Fetch all todos |
| `createTodo()` | POST | `/api/todos` | Create new todo |
| `updateTodo()` | PUT | `/api/todos/:id` | Update existing todo |
| `deleteTodo()` | DELETE | `/api/todos/:id` | Delete todo |

---

## 🎨 Styling

### Bootstrap Components Used
- Cards
- Forms & Input Groups
- Buttons & Button Groups
- Alerts
- List Groups
- Spinners

### Font Awesome Icons
- `fa-tasks` - App header
- `fa-plus` - Add button
- `fa-edit` - Edit button
- `fa-trash` - Delete button
- `fa-check` - Save button
- `fa-times` - Cancel button
- `fa-clock` - Timestamp
- `fa-list` - Task counter

### Custom Styling
- Gradient background
- Smooth transitions
- Hover effects
- Card shadows
- Responsive layout

---

## 🧪 Development

### Run Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200`. The app auto-reloads on file changes.

### Build for Production
```bash
ng build --configuration production
```
Build artifacts stored in `dist/` directory.

### Run Tests
```bash
ng test
```

### Code Linting
```bash
ng lint
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Environment Variables:**
   - Add `apiUrl` in Vercel dashboard
   - Point to deployed backend URL

### Netlify

1. **Build Command:** `ng build --configuration production`
2. **Publish Directory:** `dist/frontend/browser`
3. **Environment Variables:** Set `API_URL`

### Manual Deployment

```bash
# Build production bundle
ng build --configuration production

# Deploy dist/frontend/browser folder to any static hosting
# Update environment.prod.ts with backend URL
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@angular/animations": "^20.x.x",
    "@angular/common": "^20.x.x",
    "@angular/core": "^20.x.x",
    "@angular/forms": "^20.x.x",
    "@angular/platform-browser": "^20.x.x",
    "bootstrap": "^5.3.x",
    "@fortawesome/fontawesome-free": "^6.5.x",
    "rxjs": "^7.8.x",
    "tslib": "^2.3.x",
    "zone.js": "^0.15.x"
  }
}
```

---

## 🎯 Component Overview

### TodoListComponent

**Responsibilities:**
- Display list of todos
- Handle user interactions (add, edit, delete)
- Manage component state
- Communicate with TodoService
- Show loading and error states

**Key Methods:**
- `loadTodos()` - Fetch todos from API
- `addTodo()` - Create new todo
- `startEdit()` - Enable edit mode
- `saveEdit()` - Save edited todo
- `deleteTodo()` - Remove todo
- `cancelEdit()` - Cancel edit mode

---

## 🔒 Best Practices Implemented

✅ **Standalone Components** - Modern Angular architecture
✅ **TypeScript Strict Mode** - Type safety
✅ **Reactive Programming** - RxJS Observables
✅ **Error Handling** - Try-catch and error states
✅ **Loading States** - User feedback during async operations
✅ **Accessibility** - Semantic HTML and ARIA labels
✅ **Responsive Design** - Mobile-first approach
✅ **Code Organization** - Clear separation of concerns
✅ **Modern Syntax** - `@if` / `@for` control flow
✅ **Dependency Injection** - `inject()` function

---

## 🐛 Troubleshooting

### Common Issues

**1. CORS Error**
- Ensure backend has CORS enabled
- Check backend is running on `http://localhost:3000`

**2. API Not Found (404)**
- Verify `environment.ts` has correct `apiUrl`
- Confirm backend routes are working

**3. Bootstrap/FontAwesome Not Loading**
- Check `angular.json` styles array
- Run `npm install` again

**4. Port Already in Use**
```bash
ng serve --port 4201
```

---

## 📄 License

MIT License - See root [LICENSE](../LICENSE) file for details

---

## 👨‍💻 Developer

**Mohamed Abdelkader**
Full-Stack MEAN Developer

---

## 📞 Support

For issues or questions about this frontend application, please refer to the main project README or open an issue in the repository.

---

**Built with Angular 20 and modern web technologies** ⚡
