const { sum, multiply, divide } = require('./02-math');

describe('Test for Math', () => {
  test('adds 1 + 3 should be 4', () => {
    const rest = sum(1, 3);
    expect(rest).toBe(4);
  });

  test('adds 3 * 3 should be 9', () => {
    const rest = multiply(3, 3);
    expect(rest).toBe(9);
  });

  test('should be divide', () => {
    const rest = divide(3, 3);
    expect(rest).toBe(1);
  });

  test('should be divide by zero', () => {
    const rest = divide(3, 0);
    expect(rest).toBeNull();
  });
});
