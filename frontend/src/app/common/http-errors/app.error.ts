export class AppError {
  constructor(public error: any, public resourceName?: string) {}
  public description: string = '';
  public errorNumber: number = 0;
}
