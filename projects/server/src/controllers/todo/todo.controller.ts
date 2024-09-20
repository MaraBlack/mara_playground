import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpException,
  HttpStatus,
  NotFoundException,
  ConsoleLogger,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AuthGuard } from '@nestjs/passport';
import { Todo } from './entities/todo.entity';

// @UseGuards(AuthGuard())
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get('all-items')
  getAll(): Todo[] {
    try {
      return this.todoService.getAll();
    } catch (error) {
      throw new NotFoundException('Resource not found');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete('delete')
  remove(@Query('id') id: string) {
    const isNumeric = !isNaN(parseInt(id)) && !isNaN(+id);

    if (!isNumeric) {
      throw new HttpException(
        'Invalid ID format. ID must be a number.',
        HttpStatus.EXPECTATION_FAILED,
      );
    }

    try {
      const numericId = Number(id);
      return this.todoService.remove(numericId);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
