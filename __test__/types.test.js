import {
  isNull,
  isTrue,
  isFalse,
  isUndefined,
} from './../maths';

describe('Test null type', () => {
  test('Null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Test false type', () => {
  test('Falsy', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Test true type', () => {
  test('Truthy', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Test undefined type', () => {
  test('Undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe('Test true type with negative', () => {
  test('Not Truthy', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
