/* eslint-disable no-undef */
import totalLive from '../app';

test('live', () => {
  const input1 = { name: 'Маг', health: 90 };
  const input2 = { name: 'Маг', health: 40 };
  const input3 = { name: 'Маг', health: 12 };

  const received1 = totalLive(input1);
  const received2 = totalLive(input2);
  const received3 = totalLive(input3);

  const expected1 = healthy;
  const expected2 = wounded;
  const expected3 = critical;

  expect(received1).toBe(expected1);
  expect(received2).toBe(expected2);
  expect(received3).toBe(expected3);
});
