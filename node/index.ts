import {Container} from "@so/di";
import {CommonProviders, IRequestService} from "../common";
import {NodeFetchService} from "./nodeFetchService";

export * from '../common';
export * from './nodeFetchService';

export const InfrContainer = new Container();
InfrContainer.provide([
    ...CommonProviders,
    {provide: IRequestService, useClass: NodeFetchService},
]);