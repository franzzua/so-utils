import {Container} from "@so/di";
import {IRequestService, Logger} from "../common";
import {FetchRequestService} from "./fetchRequestService";

export * from '../common';
export * from './fetchRequestService';

export const InfrContainer = new Container();
InfrContainer.provide([
    {provide: IRequestService, useClass: FetchRequestService},
    {provide: Logger}
]);