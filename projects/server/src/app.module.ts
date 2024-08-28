import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http/exception-filter';

@Module({
  imports: [TodoModule, AuthModule],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
