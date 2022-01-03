import { on } from './on';

describe('on', () => {
  it('should provide on Sunday', () => {
    expect(on.dayOfTheWeek(6).toString()).toBe('0 0 * * 6');
  });

  it('should provide on 3rd day of the month', () => {
    expect(on.dayOfTheMonth(3).toString()).toBe('0 0 3 * *');
  });
});
