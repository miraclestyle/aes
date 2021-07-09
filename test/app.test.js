const {
  describe,
  test,
  expect,
} = require('@jest/globals');

const { getUserStats } = require('../app');

describe('Test app:', () => {
  test('Shoud verify the solution', (done) => {
    const expected = {
      followers: 3630,
      following: 9,
      repositories: 8,
      stars: 12236,
      watchers: 12236,
      forks: 118943,
    };
    getUserStats('octocat').then((stats) => {
      // console.log('expected:', expected);
      // console.log('stats:', stats);
      expect(stats).toEqual(expected);
      done();
    }).catch(console.log);
  }, 30000);
});
