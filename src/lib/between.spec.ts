import { at } from './at';
import { between } from './between';
import { inMonth } from './inMonth';
import { on } from './on';

describe('between', () => {
  it('should provide minutes range', () => {
    expect(between(at.minute(23), at.minute(33)).toString()).toBe(
      '23-33 * * * *'
    );
  });

  it('should provide hours range', () => {
    expect(between(at.hour(2), at.hour(11)).toString()).toBe('* 2-11 * * *');
  });

  it('should provide month range', () => {
    expect(between(inMonth(2), inMonth(11)).toString()).toBe('* * * 2-11 *');
  });

  it('should provide days of the week, monday to friday', () => {
    expect(between(on.dayOfTheWeek(0), on.dayOfTheWeek(4)).toString()).toBe(
      '* * * * 0-4'
    );
  });

  it('should throw an error if different types', () => {
    expect(() =>
      between(on.dayOfTheWeek(0), on.dayOfTheMonth(4)).toString()
    ).toThrow();
  });
});
