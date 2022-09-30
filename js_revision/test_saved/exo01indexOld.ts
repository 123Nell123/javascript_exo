//Arrange
//acts
//asserts
import myFunc from '../src/ex01index' ;
import {addArr} from '../src/utilities/arrays.js';
import arrays from '../src/utilities/arrays.js';

describe('addrr', () => {
    it('allow to add arry addArr', () => {
        const numArr = [1, 5, 10, 15];
        
        const result = addArr(numArr);
        expect(result).toEqual(31);
    }),

    it('add negatif nulber ', () => {
        const numArr2 = [1, 5, 10, -15];
        
        const result = addArr(numArr2);
        expect(result).toEqual(1);
    })
          

});

describe('concatArr', () => {
    it('allow to concat arr', () => {
        const numArr = [1, 5, 10, 15];
        const wordArr = ["babar","pop"];
        const result = arrays.concatArr(numArr,wordArr);
        expect(result).toEqual([1, 5, 10, 15,"babar","pop"]);
    })          

});