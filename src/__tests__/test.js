import totalLive from '../index';

test.each([
  [{ name: 'маг', health: 89 }, 'healthy'],
  [{ name: 'мечник', health: 10 }, 'critical'],
  [{ name: 'лучник', health: 40 }, 'wounded'],
])(
  ('тест функции totalLive'), (obj, expected) => {
    expect(totalLive(obj)).toBe(expected);
  },
);
