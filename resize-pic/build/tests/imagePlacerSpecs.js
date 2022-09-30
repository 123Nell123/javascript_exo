"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var supertest_1 = __importDefault(require("supertest"));
var mainRoutes_1 = __importDefault(require("../routes/mainRoutes"));
var request = (0, supertest_1.default)(mainRoutes_1.default);
describe('Test the api', function () {
    it('return a file', function () {
        expect(request).not.toBeNull;
    });
});
