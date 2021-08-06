import { getDataFromAPI } from './../promise';


describe('Promise test', () => {
  test('Request to API', (done) => {
    const url = 'https://rickandmortyapi.com/api/character';
    getDataFromAPI(url)
      .then(({ results }) => {
        expect(results.length).toBeGreaterThan(0);
        done();
      })
  });
  test('Resolve string', () => {
    return expect(Promise.resolve('Hello!')).resolves.toBe('Hello!');
  });
  test('Reject string', () => {
    return expect(Promise.reject('Error!')).rejects.toBe('Error!');
  });
});
