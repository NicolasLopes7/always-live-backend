"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SiteController_1 = __importDefault(require("./Controllers/SiteController"));
// eslint-disable-next-line import/no-unresolved
var PingToAll_1 = __importDefault(require("./services/PingToAll"));
var routes = express_1.Router();
routes.post('/addSite', SiteController_1.default.store);
routes.get('/getSites', SiteController_1.default.index);
routes.delete('/deleteSite', SiteController_1.default.delete);
routes.get('/pingToAll', PingToAll_1.default.ping);
exports.default = routes;
