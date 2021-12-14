const capitalize = require('./functions/capitalize');

// Capitalize string function
test('hello becomes Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('Hello stays the same', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('hELLO becomes HELLO', () => {
  expect(capitalize('hELLO')).toBe('HELLO');
});

test('HELLO stays the same', () => {
  expect(capitalize('HELLO')).toBe('HELLO');
});