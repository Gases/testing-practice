/* eslint-disable no-undef */
const capitalize = require('../functions/capitalize');

describe('Capitalize the first letter of a word', () => {
  test('"hello" becomes "Hello"', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('"Hello" stays the same', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('"hELLO" becomes "HELLO"', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });

  test('"HELLO" stays the "same"', () => {
    expect(capitalize('HELLO')).toBe('HELLO');
  });
});
