"use strict";
/* eslint @typescript-eslint/no-var-requires: "off" */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imagePlacer_1 = __importDefault(require("../api/imagePlacer"));
var express = require('express');
var image = express.Router();
//resizer
image.use('/image.resize/:length', function (req, res) {
    console.log('length:', req.params.length);
    res.send('image resized est size :' + length);
    //pb pour appelle de myResizer ici
    (0, imagePlacer_1.default)(req.params.length);
});
exports.default = image;
