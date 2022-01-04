import { at } from './at';
import { combine } from './combine';
import { every } from './every';
import { inMonth } from './inMonth';
import { on } from './on';

describe('combine', () => {
  it('should provide every hour at 30 minutes', () => {
    expect(combine(every.hours(2), at.minute(30)).toString()).toBe(
      '30 */2 * * *'
    );
  });

  it('should provide every day at midnight', () => {
    expect(combine(at.hour(0), at.minute(0)).toString()).toBe('0 0 * * *');
  });

  it('should provide every Thursday at midnight in July', () => {
    expect(
      combine(
        on.dayOfTheWeek(5),
        at.hour(0),
        inMonth(7),
        at.minute(0)
      ).toString()
    ).toBe('0 0 * 7 5');
  });

  it('should provide every day at 2am', () => {
    expect(combine(at.hour(2), at.minute(0)).toString()).toBe('0 2 * * *');
  });

  it('should provide every sunday at 2am', () => {
    expect(
      combine(on.dayOfTheWeek(6), at.hour(2), at.minute(0)).toString()
    ).toBe('0 2 * * 6');
  });

  it('should combine different functions with different order', () => {
    const expectedValue = '32 2 15 * 6';
    expect(
      combine(
        on.dayOfTheWeek(6),
        on.dayOfTheMonth(15),
        at.hour(2),
        at.minute(32)
      ).toString()
    ).toBe(expectedValue);

    expect(
      combine(
        at.hour(2),
        at.minute(32),
        on.dayOfTheMonth(15),
        on.dayOfTheWeek(6)
      ).toString()
    ).toBe(expectedValue);
  });
});
