import { callbackMain } from './../src/asynchronous'

describe('Callback testing', () => {
  test('Callback', (done) => {
    function otherCallback(data) {
      expect(data).toBe('Hello');
      done();
    }
    callbackMain(otherCallback)
  });
});
