import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../common/http-api/api.service';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private apiService: ApiService) {}

  // Fetch all items
  getAllItems(): Observable<Todo[]> {
    return this.apiService.getAll<Todo[]>(`all-items`);
  }

  // Fetch all items
  getAllItemsCopy(): Observable<Todo[]> {
    return this.apiService.getAll<Todo[]>(`all-items-copy`);
  }

  // Create a new todo
  createTodo(createTodoDto: Todo): Observable<Todo> {
    return this.apiService.create<Todo>(`/create`, createTodoDto);
  }

  // Find a todo by ID
  findTodoById(id: number): Observable<Todo> {
    return this.apiService.get<Todo>(`/${id}`);
  }

  // Update a todo by ID
  updateTodo(id: number, updateTodoDto: Todo): Observable<Todo> {
    return this.apiService.update<Todo>(`/update/${id}`, updateTodoDto);
  }

  // Delete a todo by ID
  deleteTodo(id: number): Observable<Todo[]> {
    return this.apiService.delete<Todo[]>(`delete`, {
      params: { id: id.toString() },
    });
  }
}
