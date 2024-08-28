import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private data: Todo[] = [
    { id: 1, name: 'Buy shampoo' },
    { id: 2, name: 'Wash the bike' },
    { id: 3, name: 'Make an appointment to the doctor' },
    { id: 4, name: 'Buy new set of spoons' },
    { id: 5, name: 'Do not forget to water the plants' },
  ];

  private copyData: Todo[] = [
    { id: 1, name: 'Buy shampoo' },
    { id: 2, name: 'Wash the bike' },
    { id: 3, name: 'Make an appointment to the doctor' },
    { id: 4, name: 'Buy new set of spoons' },
    { id: 5, name: 'Do not forget to water the plants' },
  ];

  // Helper method to find a todo by ID
  private findTodoById(id: number): Todo {
    const todo = this.data.find((item) => item.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with ID ${id} not found`);
    }
    return todo;
  }

  // Method to get all todos
  getAll(): Todo[] {
    return this.data;
  }

  getAllCopy(): Todo[] {
    return this.copyData;
  }

  // Method to get a single todo by ID
  findOne(id: number): Todo {
    return this.findTodoById(id);
  }

  // Method to create a new todo
  create(createTodoDto: CreateTodoDto): Todo {
    const newTodo: Todo = {
      id: this.data.length
        ? Math.max(...this.data.map((todo) => todo.id)) + 1
        : 1, // Generate a new ID
      ...createTodoDto,
    };
    this.data.push(newTodo);
    return newTodo;
  }

  // Method to update an existing todo
  update(id: number, updateTodoDto: UpdateTodoDto): Todo {
    const todo = this.findTodoById(id);
    const updatedTodo = { ...todo, ...updateTodoDto };
    this.data = this.data.map((item) => (item.id === id ? updatedTodo : item));
    return updatedTodo;
  }

  // Method to delete a todo by ID
  remove(id: number): void {
    // const todo = this.findTodoById(id);
    console.log('id', typeof id);

    this.data = this.data.filter((item) => item.id !== Number(id));
  }
}
