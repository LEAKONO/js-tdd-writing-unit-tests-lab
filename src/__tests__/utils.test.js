// src/__tests__/utils.test.js

const { isPalindrome } = require('../utils');

describe('isPalindrome function', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });
});

