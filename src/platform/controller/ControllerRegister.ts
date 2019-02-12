import TestController from './test/TestController';
import MDController from './markdown/MDController';
import { Controller } from './Controller';

let controllers: Controller[];
controllers = [
    new TestController(),
    new MDController()
];
export default controllers;