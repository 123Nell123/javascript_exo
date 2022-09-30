"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Require statement not part of import statement
/* eslint @typescript-eslint/no-var-requires: "off" */
var routeImager_1 = __importDefault(require("./routeMetier/routeImager"));
var express_1 = __importDefault(require("express"));
//create a Routes for the endpoint
var router = express_1.default.Router();
router.get('/', function (req, res) {
    console.log('Time from router:', Date.now());
});
router.use('/main', routeImager_1.default);
exports.default = router;
