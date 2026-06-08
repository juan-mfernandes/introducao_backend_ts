"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasksController_1 = __importDefault(require("../controllers/tasksController"));
const tasksRouter = (0, express_1.Router)();
tasksRouter.post('/', tasksController_1.default.create);
tasksRouter.get('/', tasksController_1.default.show);
tasksRouter.put('/:id', tasksController_1.default.update);
exports.default = tasksRouter;
//# sourceMappingURL=taskRouter.js.map