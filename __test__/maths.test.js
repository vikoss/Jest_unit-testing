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
  test('two subtract two is minus two', () => {
    expect(subtract(5, 7)).toBe(-2);
  });
  test('five multiply two is ten', () => {
    expect(multiply(5, 2)).toBe(10);
  });
  test('ten divide five is two', () => {
    expect(divide(10, 5)).toBe(2);
  });
});