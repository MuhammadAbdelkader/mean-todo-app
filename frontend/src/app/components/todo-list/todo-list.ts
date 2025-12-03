import { Component, inject, OnInit, Pipe } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, DatePipe],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit{
   private todoService = inject(TodoService);

  todos: Todo[] = [];
  newTodoText = '';
  editingTodoId: string | null = null;
  editingTodoText = '';
  loading = false;
  error = '';

  ngOnInit(): void {
    this.loadTodos();
  }

  // Load all todos
  loadTodos(): void {
    this.loading = true;
    this.error = '';
    this.todoService.getTodos().subscribe({
      next: (data) => {
        this.todos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load todos. Please check if the backend is running.';
        this.loading = false;
        console.error('Error loading todos:', err);
      }
    });
  }

  // Add new todo
  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.todoService.createTodo(this.newTodoText).subscribe({
        next: (todo) => {
          this.todos.unshift(todo);
          this.newTodoText = '';
        },
        error: (err) => {
          this.error = 'Failed to add todo';
          console.error('Error adding todo:', err);
        }
      });
    }
  }

  // Start editing
  startEdit(todo: Todo): void {
    this.editingTodoId = todo._id!;
    this.editingTodoText = todo.text;
  }

  // Cancel editing
  cancelEdit(): void {
    this.editingTodoId = null;
    this.editingTodoText = '';
  }

  // Save edited todo
  saveEdit(id: string): void {
    if (this.editingTodoText.trim()) {
      this.todoService.updateTodo(id, this.editingTodoText).subscribe({
        next: (updatedTodo) => {
          const index = this.todos.findIndex(t => t._id === id);
          if (index !== -1) {
            this.todos[index] = updatedTodo;
          }
          this.cancelEdit();
        },
        error: (err) => {
          this.error = 'Failed to update todo';
          console.error('Error updating todo:', err);
        }
      });
    }
  }

  // Delete todo
  deleteTodo(id: string): void {
    if (confirm('Are you sure you want to delete this todo?')) {
      this.todoService.deleteTodo(id).subscribe({
        next: () => {
          this.todos = this.todos.filter(t => t._id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete todo';
          console.error('Error deleting todo:', err);
        }
      });
    }
  }

  // Helper to check if editing
  isEditing(todoId: string): boolean {
    return this.editingTodoId === todoId;
  }
}
