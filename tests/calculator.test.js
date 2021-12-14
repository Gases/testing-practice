/* eslint-disable no-undef */
const calculator = require('../functions/calculator');

describe('Simple calculator', () => {
  test('Simple addition works', () => {
    expect(calculator.add(5, 2)).toBe(7);
  });

  test('Adding negative numbers works', () => {
    expect(calculator.add(-5, -2)).toBe(-7);
  });

  test('Adding positive and negative numbers works', () => {
    expect(calculator.add(5, -2)).toBe(3);
  });

  test('Simple subtraction works', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
  });

  test('Subtracting negative numbers works', () => {
    expect(calculator.subtract(-5, -2)).toBe(-3);
  });

  test('Subtracting positive and negative numbers works', () => {
    expect(calculator.subtract(5, -2)).toBe(7);
  });

  test('Simple multiplication works', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });

  test('Multiplying decimals works', () => {
    expect(calculator.multiply(0.5, 2)).toBe(1);
  });

  test('Multiplying by 0 works', () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });

  test('Dividing by 0 gives an error', () => {
    expect(calculator.divide(5, 0)).toBe('Cannot divide by 0');
  });

  test('Simple division works', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('Division resulting in decimals works', () => {
    expect(calculator.divide(9, 2)).toBe(4.50);
    expect(calculator.divide(10, 3)).toBe(3.33);
  });
});
