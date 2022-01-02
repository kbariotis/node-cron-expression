import { at } from './at';
import { between } from './between';

describe('between', () => {
  it('should provide minutes range', () => {
    expect(between(at.minute(23), at.minute(33)).toString()).toBe(
      '23-33 * * * *'
    );
  });

  it('should provide hours range', () => {
    expect(between(at.hour(2), at.hour(11)).toString()).toBe('* 2-11 * * *');
  });

  it('should provide days of the week, monday to friday', () => {
    expect(between(at.dayOfTheWeek(0), at.dayOfTheWeek(4)).toString()).toBe(
      '* * * * 0-4'
    );
  });

  it('should throw an error if different types', () => {
    expect(() =>
      between(at.dayOfTheWeek(0), at.dayOfTheMonth(4)).toString()
    ).toThrow();
  });
});
