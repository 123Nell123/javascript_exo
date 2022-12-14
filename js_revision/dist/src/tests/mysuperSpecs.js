"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysuper_1 = __importDefault(require("../mysuper"));
const strings_1 = __importDefault(require("../utilities/strings"));
const numbers_1 = __importDefault(require("../utilities/numbers"));
const arrays_1 = __importDefault(require("../utilities/arrays"));
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
describe('newArr', () => {
    beforeEach(function () {
        console.log('my word', wordArr);
    });
    it('should make a new array containing dog', () => {
        expect((0, mysuper_1.default)(3, wordArr)).toContain('dog');
    });
    it('make a new array containing 3', () => {
        expect((0, mysuper_1.default)(3, wordArr)).toContain(3);
    });
});
describe('strings', () => {
    //test 2
    it('should capitalize a string', () => {
        expect(strings_1.default.capitalize('a sentence')).toEqual('A Sentence');
    });
    it('should allow sentence to remain capitalized', () => {
        expect(strings_1.default.capitalize('A Sentence')).toEqual('A Sentence');
    });
});
describe('number', () => {
    //test 3: sum
    it('should be a sum greater than 10', () => {
        expect(numbers_1.default.sum(3, 10)).toBeGreaterThan(10);
    });
    it('should be a sum less than 10', () => {
        expect(numbers_1.default.sum(-3, 10)).toBeLessThan(10);
    });
    //test 4: mult
    it('should multiply 3 by 5 and be 15', () => {
        expect(numbers_1.default.multiply(3, 5)).toBe(15);
    });
    it('should multiply 0 by 5 to be falsy', () => {
        expect(numbers_1.default.multiply(0, 5)).toBeFalsy();
    });
});
describe('arrays', () => {
    const numArr = [3, 4, 5, 6];
    //test 5: add
    it('should add numbers in array and be truthy', () => {
        expect(arrays_1.default.addArr(numArr)).toBeTruthy();
    });
    it('should add numbers in array and be 19', () => {
        expect(arrays_1.default.addArr(numArr)).toBe(19);
    });
    it('should concatinate 2 arrays to not equal the first', () => {
        expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(numArr);
    });
    it('should concatinate 2 arrays to not equal the second', () => {
        expect(arrays_1.default.concatArr(numArr, wordArr)).not.toEqual(wordArr);
    });
    it('should contain 3 items except rabbit', () => {
        expect(arrays_1.default.cut3(wordArr)).toEqual(['cat', 'dog', 'bird']);
    });
    it('should not contain the third index rabbit', () => {
        expect(arrays_1.default.cut3(wordArr)).not.toContain('rabbit');
    });
    it('should have 6 be largest number', () => {
        expect(arrays_1.default.lgNum(numArr)).toEqual(6);
    });
    it('should not have a large number and be falsy', () => {
        expect(arrays_1.default.lgNum(wordArr)).toBeFalsy();
    });
});
