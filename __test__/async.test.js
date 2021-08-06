import { getDataFromAPI } from './../src/asynchronous';

describe('Async/Await test', () => {
  test('Request to API', async () => {
    const url = 'https://rickandmortyapi.com/api/character';
    await getDataFromAPI(url).then(({ results }) => {
      expect(results.length).toBeGreaterThan(0);
    });
  });
  test('Request to API with error', async () => {
    const url = 'http://httpstat.us/500';
    const response = getDataFromAPI(url);
    await expect(response).rejects.toEqual(Error('Request failed with status code 500'));
  });
});
