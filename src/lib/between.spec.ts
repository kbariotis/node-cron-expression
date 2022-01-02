import { at } from './at';
import { between } from './between';

describe('between', () => {
  it('should combine two minutes', () => {
    expect(between(at.minute(23), at.minute(33)).toString()).toBe(
      '23-33 * * * *'
    );
  });

  it('hour range', () => {
    expect(between(at.hour(2), at.hour(11)).toString()).toBe('* 2-11 * * *');
  });

  it('monday to friday', () => {
    expect(between(at.dayOfTheWeek(0), at.dayOfTheWeek(4)).toString()).toBe(
      '* * * * 0-4'
    );
  });
});
