import { atHour, atMinute } from './at';
import { combine } from './combine';
import { every } from './every';
import { inMonth } from './inMonth';
import { onDayOfTheMonth, onDayOfTheWeek } from './on';

describe('combine', () => {
  it('should provide every hour at 30 minutes', () => {
    expect(combine(every(2).hours(), atMinute(30)).toString()).toBe(
      '30 */2 * * *'
    );
  });

  it('should provide every day at midnight', () => {
    expect(combine(atHour(0), atMinute(0)).toString()).toBe('0 0 * * *');
  });

  it('should provide every Thursday at midnight in July', () => {
    expect(
      combine(onDayOfTheWeek(5), atHour(0), inMonth(7), atMinute(0)).toString()
    ).toBe('0 0 * 7 5');
  });

  it('should provide every day at 2am', () => {
    expect(combine(atHour(2), atMinute(0)).toString()).toBe('0 2 * * *');
  });

  it('should provide every sunday at 2am', () => {
    expect(combine(onDayOfTheWeek(6), atHour(2), atMinute(0)).toString()).toBe(
      '0 2 * * 6'
    );
  });

  it('should combine different functions with different order', () => {
    const expectedValue = '32 2 15 * 6';
    expect(
      combine(
        onDayOfTheWeek(6),
        onDayOfTheMonth(15),
        atHour(2),
        atMinute(32)
      ).toString()
    ).toBe(expectedValue);

    expect(
      combine(
        atHour(2),
        atMinute(32),
        onDayOfTheMonth(15),
        onDayOfTheWeek(6)
      ).toString()
    ).toBe(expectedValue);
  });
});
