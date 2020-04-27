"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import UserController from './Controllers/UserController';
var UserController_1 = __importDefault(require("~/Controllers/UserController"));
var routes = express_1.Router();
routes.get('/', UserController_1.default.index);
exports.default = routes;
