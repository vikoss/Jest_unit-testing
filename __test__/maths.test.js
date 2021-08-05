import {
  add,
  subtract,
  multiply,
  divide,
} from './../maths';

describe('Basic operations', () => {
  test('two plus two is four', () => {
    expect(add(2, 2)).toBe(4);
  });
});