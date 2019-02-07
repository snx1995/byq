import TestController from './test/test_controller';
import MDController from './markdown/md_controller';
import { Controller } from './controller';

let controllers: Controller[];
controllers = [
    new TestController(),
    new MDController()
];
export default controllers;