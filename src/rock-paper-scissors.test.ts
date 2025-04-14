import { play } from './rock-paper-scissors';

describe('play function', () => {
  test('should return 0 for a tie (both player 1 and player 2 choose rock)', () => {
    expect(play('rock', 'rock')).toBe(0);
  });

  test('should return 1 for player 1 winning (rock vs scissors)', () => {
    expect(play('rock', 'scissors')).toBe(1);
  });

  test('should return 2 for player 2 winning (rock vs paper)', () => {
    expect(play('rock', 'paper')).toBe(2);
  });

  test('should return 1 for player 1 winning (scissors vs paper)', () => {
    expect(play('scissors', 'paper')).toBe(1);
  });

  test('should return 2 for player 2 winning (scissors vs rock)', () => {
    expect(play('scissors', 'rock')).toBe(2);
  });

  test('should return 0 for a tie (both player 1 and player 2 choose paper)', () => {
    expect(play('paper', 'paper')).toBe(0);
  });

  test('should handle case insensitivity', () => {
    expect(play('Rock', 'scissors')).toBe(1);
    expect(play('PAPER', 'paper')).toBe(0);
    expect(play('scissors', 'Rock')).toBe(2);
  });

  test('should throw an error for invalid input (player 1 chooses an invalid move)', () => {
    expect(() => play('invalid', 'rock')).toThrowError('Invalid move: invalid');
  });

  test('should throw an error for invalid input (player 2 chooses an invalid move)', () => {
    expect(() => play('rock', 'invalid')).toThrowError('Invalid move: invalid');
  });

  test('should throw an error for both players choosing invalid moves', () => {
    expect(() => play('invalid', 'invalid')).toThrowError('Invalid move: invalid');
  });
});
