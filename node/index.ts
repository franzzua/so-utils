import {Container} from "@so/di";
import {IRequestService, Logger} from "../common";
import {NodeFetchService} from "./nodeFetchService";

export * from '../common';
export * from './nodeFetchService';

export const InfrContainer = new Container();
InfrContainer.provide([
    {provide: IRequestService, useClass: NodeFetchService},
    {provide: Logger}
]);