const {
  describe,
  test,
  expect,
} = require('@jest/globals');

const solution = require('../app');

describe('Test app:', () => {
  test('Shoud verify the solution', () => {
    expect(solution(5, 3)).toBe(15);
  });
});
