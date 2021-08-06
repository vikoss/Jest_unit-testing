import { add as numbers } from './../maths';

describe('Numbers', () => {
  test('Greater than', () => {
    expect(numbers(2, 2)).toBeGreaterThan(1);
  });
  test('Greater than or equal', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test('Less than', () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });
  test('Less than or equal', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });
  test('Float numbers', () => {
    expect(numbers(2.4, 2.2)).toBeCloseTo(4.6);
  });
});