"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const arrays_js_1 = require("../src/utilities/arrays.js");
const arrays_js_2 = __importDefault(require("../src/utilities/arrays.js"));
describe('addrr', () => {
    it('allow to add arry addArr', () => {
        const numArr = [1, 5, 10, 15];
        const result = (0, arrays_js_1.addArr)(numArr);
        expect(result).toEqual(31);
    }),
        it('add negatif nulber ', () => {
            const numArr2 = [1, 5, 10, -15];
            const result = (0, arrays_js_1.addArr)(numArr2);
            expect(result).toEqual(1);
        });
});
describe('concatArr', () => {
    it('allow to concat arr', () => {
        const numArr = [1, 5, 10, 15];
        const wordArr = ["babar", "pop"];
        const result = arrays_js_2.default.concatArr(numArr, wordArr);
        expect(result).toEqual([1, 5, 10, 15, "babar", "pop"]);
    });
});
