/*
| Setup of testing
*/

/*
| After all
*/
afterAll(() => console.log('After all test'));
afterEach(() => console.log('After each test'));
/*
| Before all
*/
beforeAll(() => console.log('After all test'));
beforeEach(() => console.log('After each test'));

describe('Before run', () => {
  test('Is truthy', () => {
    expect(true).toBeTruthy();
  });
});
