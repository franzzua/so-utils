import {Container} from "@so/di";
import {CommonProviders, IRequestService} from "../common";
import {FetchRequestService} from "./fetchRequestService";

export * from '../common';
export * from './fetchRequestService';

export const InfrContainer = new Container();
InfrContainer.provide([
    ...CommonProviders,
    {provide: IRequestService, useClass: FetchRequestService},
]);