const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) return 'Cannot divide by 0';
    if (!a % b === 0) return parseFloat((a / b).toFixed(2));
    return a / b;
  },
};

module.exports = calculator;
