import { add } from './../src/matchers';

describe('Numbers', () => {
  test('Greater than', () => {
    expect(add(2, 2)).toBeGreaterThan(1);
  });
  test('Greater than or equal', () => {
    expect(add(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test('Less than', () => {
    expect(add(2, 2)).toBeLessThan(5);
  });
  test('Less than or equal', () => {
    expect(add(2, 2)).toBeLessThanOrEqual(4);
  });
  test('Float numbers', () => {
    expect(add(2.4, 2.2)).toBeCloseTo(4.6);
  });
});