import { getCharacter } from './../src/snapshot';
import { character } from './../src/asynchronous'

describe('Snapshots', () => {
  test('Snapshot character', async () => {
    const response = await character();
    expect(getCharacter(response)).toMatchSnapshot();
  });
  test('Always failure', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      createdAt: new Date(),
    };
    expect(user).toMatchSnapshot();
  });
  test('Exception snapshot', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      nickName: 'Vikoss',
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});