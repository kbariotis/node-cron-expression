import { Expression } from './expression';

describe('expression', () => {
  it('should provide should run every minute', () => {
    const expression = new Expression();
    expect(expression.toString()).toBe('* * * * *');
  });
});
