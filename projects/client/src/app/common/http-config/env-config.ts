import { InjectionToken } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface IEnvironmentConfig {
  baseUrl: string;
}

export const ENV_CONFIG_TOKEN = new InjectionToken<IEnvironmentConfig>(
  'ENV_CONFIG_TOKEN'
);

export const ENV_APP_CONFIG: IEnvironmentConfig = {
  baseUrl: environment.baseUrl,
}; 
