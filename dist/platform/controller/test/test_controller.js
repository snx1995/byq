"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = require("../controller");
var TestController = (function (_super) {
    __extends(TestController, _super);
    function TestController() {
        var _this = _super.call(this) || this;
        _this.router = {
            path: "/test",
            method: "test",
            child: {
                path: "test1",
                method: "test",
            }
        };
        return _this;
    }
    TestController.prototype.test = function (params) {
        return '';
    };
    return TestController;
}(controller_1.default));
exports.TestController = TestController;
//# sourceMappingURL=test_controller.js.map