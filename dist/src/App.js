"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var routes_1 = __importDefault(require("./routes"));
require('dotenv').config();
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        if (process.env.MONGO_DB_URL) {
            this.mongoURL = process.env.MONGO_DB_URL;
        }
        else {
            this.mongoURL = ' ';
        }
        this.middlewares();
        this.routes();
        this.database();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    };
    App.prototype.database = function () {
        mongoose_1.default.connect(this.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    };
    App.prototype.routes = function () {
        this.express.use(routes_1.default);
    };
    return App;
}());
exports.default = new App().express;
