import { colors } from './../src/matchers';

describe('Contain item in array', () => {
  test('Contain green', () => {
    expect(colors()).toContain('green');
  });
  test('Not contain pink', () => {
    expect(colors()).not.toContain('pink');
  });
  test('Not contain pink', () => {
    expect(colors()).toHaveLength(3);
  });
});