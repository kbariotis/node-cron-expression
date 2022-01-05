import { onDayOfTheMonth, onDayOfTheWeek } from './on';

describe('on', () => {
  it('should provide on Sunday', () => {
    expect(onDayOfTheWeek(6).toString()).toBe('0 0 * * 6');
  });

  it('should provide on 3rd day of the month', () => {
    expect(onDayOfTheMonth(3).toString()).toBe('0 0 3 * *');
  });

  it('should provide day of the week using literals', () => {
    expect(onDayOfTheWeek('Sunday').toString()).toBe('0 0 * * 0');
  });
});
