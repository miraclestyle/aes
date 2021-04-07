const {
  describe,
  test,
  expect,
} = require('@jest/globals');

const { getUserStats } = require('../app');

describe('Test app:', () => {
  test('Shoud verify the solution', (done) => {
    const expected = {
      followers: 3629,
      following: 9,
      repositories: 8,
      stars: 12235,
      watchers: 12235,
      forks: 118938,
    };
    getUserStats('octocat').then((stats) => {
      console.log('expected:', expected);
      console.log('stats:', stats);
      expect(stats).toEqual(expected);
      done();
    });
  });
});
