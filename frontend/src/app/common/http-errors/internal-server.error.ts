import { AppError } from './app.error';

export class InternalServerError extends AppError {
  constructor(error?: any, resourceName?: string) {
    super(error, resourceName);

    this.description = `Internal Server Error`;
    this.errorNumber = 500;
  }
}