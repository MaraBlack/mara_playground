import { AppError } from './app.error';

export class UnauthorizedError extends AppError {
  constructor(error?: any, resourceName?: string) {
    super(error, resourceName);

    this.description = `You are not authorised to access this ${resourceName}.`;
    this.errorNumber = 401;
  }
}
