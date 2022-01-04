import { atHour, atMinute } from './at';
import { between } from './between';
import { inMonth } from './inMonth';
import { onDayOfTheMonth, onDayOfTheWeek } from './on';

describe('between', () => {
  it('should provide minutes range', () => {
    expect(between(atMinute(23), atMinute(33)).toString()).toBe(
      '23-33 * * * *'
    );
  });

  it('should provide hours range', () => {
    expect(between(atHour(2), atHour(11)).toString()).toBe('* 2-11 * * *');
  });

  it('should provide month range', () => {
    expect(between(inMonth(2), inMonth(11)).toString()).toBe('* * * 2-11 *');
  });

  it('should provide days of the week, monday to friday', () => {
    expect(between(onDayOfTheWeek(0), onDayOfTheWeek(4)).toString()).toBe(
      '* * * * 0-4'
    );
  });

  it('should throw an error if different types', () => {
    expect(() =>
      between(onDayOfTheWeek(0), onDayOfTheMonth(4)).toString()
    ).toThrow();
  });
});
