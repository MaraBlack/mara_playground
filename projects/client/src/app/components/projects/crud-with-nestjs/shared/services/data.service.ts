import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../../../common/http-api/api.service';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private projectUrl = 'todo';

  constructor(private apiService: ApiService) {}

  // Fetch all items
  getAllItems(): Observable<Todo[]> {
    return this.apiService.getAll<Todo[]>(this.projectUrl,`all-items`);
  }

  // Create a new todo
  createTodo(createTodoDto: Todo): Observable<Todo> {
    return this.apiService.create<Todo>(this.projectUrl,`/create`, createTodoDto);
  }

  // Find a todo by ID
  findTodoById(id: number): Observable<Todo> {
    return this.apiService.getAll<Todo>(this.projectUrl,`/${id}`);
  }

  // Update a todo by ID
  updateTodo(id: number, updateTodoDto: Todo): Observable<Todo> {
    return this.apiService.update<Todo>(this.projectUrl,`/update/${id}`, updateTodoDto);
  }

  // Delete a todo by ID
  deleteTodo(id: number): Observable<Todo[]> {
    return this.apiService.delete<Todo[]>(this.projectUrl,`delete`, {
      params: { id: id.toString() },
    });
  }
}
