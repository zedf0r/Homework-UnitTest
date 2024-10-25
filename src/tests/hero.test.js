import Character from '../js/hero';

test('Health hero is equal healthy', () => {
  const result = Character({ name: 'Маг', health: 90 });

  expect(result).toBe('healthy');
});

test.each([
  { name: 'Маг', health: 90, expected: 'healthy' },
  { name: 'Воин', health: 55, expected: 'healthy' },
  { name: 'Борец', health: 64, expected: 'healthy' },
  { name: 'Маг', health: 40, expected: 'wounded' },
  { name: 'Катапульта', health: 25, expected: 'wounded' },
  { name: 'Орк', health: 16, expected: 'wounded' },
  { name: 'Эльф', health: 10, expected: 'critical' },
  { name: 'Замок', health: 5, expected: 'critical' },
])('testing heros health with %s status and %i health', ({ name, health, expected }) => {
  const result = Character({ name, health });
  expect(result).toBe(expected);
});

test('Health hero is equal wounded', () => {
  const result = Character({ name: 'Воин', health: 45 });

  expect(result).toBe('wounded');
});

test('Health hero is equal critical', () => {
  const result = Character({ name: 'Замок', health: 10 });

  expect(result).toBe('critical');
});
