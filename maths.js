const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const isNull = () => null;
const isTrue = () => true;
const isFalse = () => false;
const isUndefined = () => undefined;

const colors = () => ['red', 'blue', 'green'];
const colors1 = () => ['red', 'blue', 'green'];

const callbackMain = (callback) => callback('Hello');

export {
  add,
  subtract,
  multiply,
  divide,
  isNull,
  isTrue,
  isFalse,
  isUndefined,
  colors,
  colors1,
  callbackMain,
};
