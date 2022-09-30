
const { isPalindrome } = require('../palindrome.js');

describe('palindrome', () => {

it('expect myFuncPalandrome(radar) to equal/tobe radar,', () => {
  expect(isPalindrome("radar")).toEqual("radar");
});

it('expect myFuncpalendrome(mpm) to equal/tobe mpm,', () => {
    expect(isPalindrome("mpm")).toEqual("mpm");
  });
})