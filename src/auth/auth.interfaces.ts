import { InjectionToken } from '@angular/core';

export const AUTH_CONFIG = new InjectionToken<AuthConfiguration>('auth.config');

export const AppLocationMask = {
  Allow: 1,
  Deny: 0,
};

export interface AppLocation {
  redirectTo?: any;
  account?: string;
  path: string;
  mask: 0 | 1;
}

export interface AppLocationPattern extends AppLocation {
  pattern?: RegExp;
}

export interface AuthConfiguration {
  login: string;
  logout?: string;
  client_id: string;
  scope: string[];
  callback: string;
  locations?: AppLocation[];
}
