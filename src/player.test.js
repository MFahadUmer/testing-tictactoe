import player from "./player";

test('return Object with players name and symbol', () => {
  expect(player('Muhammad', 'X')).toEqual({ name: 'Muhammad', symbol: 'X' });
});