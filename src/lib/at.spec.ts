import { at } from './at';

describe('at', () => {
  it('should run at minute', () => {
    expect(at.minute(23).toString()).toBe('23 * * * *');
  });

  it('should run at minute', () => {
    expect(at.minute([23, 32, 56]).toString()).toBe('23,32,56 * * * *');
  });
});
