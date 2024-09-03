import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { AuthModule } from './auth/auth.module';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http/exception-filter';
import { GoogleDocController } from './google-doc/google-doc.controller';
import { GoogleDocService } from './google-doc/google-doc.service';

@Module({
  imports: [TodoModule, AuthModule],
  controllers: [TodoController, GoogleDocController],
  providers: [
    TodoService,
    GoogleDocService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
