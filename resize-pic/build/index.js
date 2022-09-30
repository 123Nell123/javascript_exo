"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require statement not part of import statement
/* eslint @typescript-eslint/no-var-requires: "off" */
var mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
var express = require('express');
var app = express();
var sharp = require('sharp');
var hostname = 'localhost';
var port = 3000;
app.listen(port, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
app.get('/', function (req, res, next) {
    console.log('test');
    res.send('http://localhost:3000/api/main/image');
    next();
});
app.use('/api', mainRoutes_1.default);
exports.default = app;
