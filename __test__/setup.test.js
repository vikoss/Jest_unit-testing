// After each test
afterAll(() => console.log('After all test'));
afterEach(() => console.log('After each test'));

beforeAll(() => console.log('After all test'));
beforeEach(() => console.log('After each test'));

describe('Before run', () => {
  test('Is truthy', () => {
    expect(true).toBeTruthy();
  });
});