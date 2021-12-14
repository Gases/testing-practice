/* eslint-disable no-undef */
const reverseString = require('../functions/reverseString');

describe('Reverse a string', () => {
  test('"hello" become "olleh"', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('Palindromes stay the same', () => {
    expect(reverseString('level')).toBe('level');
  });

  test('Multiple word palindromes stay the same', () => {
    expect(reverseString('leper repel')).toBe('leper repel');
  });

  test('Works with number strings', () => {
    expect(reverseString('12341234')).toBe('43214321');
  });

  test('Works with number and word strings', () => {
    expect(reverseString('hello 12341234')).toBe('43214321 olleh');
  });
});
