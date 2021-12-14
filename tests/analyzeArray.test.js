/* eslint-disable no-undef */
const analyzeArray = require('../functions/analyzeArray');

describe('Analyze array function', () => {
  test('Works for empty arrays', () => {
    expect(analyzeArray([])).toStrictEqual({
      average: undefined,
      min: undefined,
      max: undefined,
      length: 0,
    });
  });

  test('Works for arrays of length 1', () => {
    expect(analyzeArray([1])).toStrictEqual({
      average: 1,
      min: 1,
      max: 1,
      length: 1,
    });
  });

  test('Works for arrays with positive numbers only', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('Works for arrays with negative numbers only', () => {
    expect(analyzeArray([-1, -8, -3, -4, -2, -6])).toStrictEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    });
  });

  test('Works for ararys with both positive and negative numbers', () => {
    expect(analyzeArray([-1, 8, -3, 4, 2, -6])).toStrictEqual({
      average: 0.667,
      min: -6,
      max: 8,
      length: 6,
    });
  });
});
