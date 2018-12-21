import {Logger} from "./logger";
import {ApiService, ApiUrlInjectionToken} from "./api.service";
import {IRequestService} from "./i-request.service";

export * from './logger';
export * from './api.service';
export * from './i-request.service';

export const CommonProviders = [
    {provide: Logger},
    {provide: ApiService, deps: [IRequestService, ApiUrlInjectionToken]},
    {provide: ApiUrlInjectionToken, useValue: 'http://localhost/api'}
];