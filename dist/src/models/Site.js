"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var SiteSchema = new mongoose_1.Schema({
    url: String,
}, {
    timestamps: true,
});
exports.default = mongoose_1.model('Site', SiteSchema);
