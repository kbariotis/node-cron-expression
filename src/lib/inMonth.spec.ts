import { inMonth } from './inMonth';

describe('inMonth', () => {
  it('should provide in January', () => {
    expect(inMonth(1).toString()).toBe('* * * 1 *');
  });

  it('should provide in January and December', () => {
    expect(inMonth([1, 12]).toString()).toBe('* * * 1,12 *');
  });
});
