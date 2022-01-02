import { at } from './at';
import { combine } from './combine';
import { every } from './every';
import { on } from './on';

describe('combine', () => {
  it('should provide every hour at 30 minutes', () => {
    expect(
      combine(
        every.dayOfTheWeek(),
        every.month(),
        every.dayOfTheMonth(),
        every.hours(2),
        at.minute(30)
      ).toString()
    ).toBe('30 */2 * * *');
  });

  it('should provide every day at midnight', () => {
    expect(
      combine(
        every.dayOfTheWeek(),
        every.month(),
        every.dayOfTheMonth(),
        at.hour(0),
        at.minute(0)
      ).toString()
    ).toBe('0 0 * * *');
  });

  it('should provide every day at 2am', () => {
    expect(
      combine(
        every.dayOfTheWeek(),
        every.month(),
        every.dayOfTheMonth(),
        at.hour(2),
        at.minute(0)
      ).toString()
    ).toBe('0 2 * * *');
  });

  it('should provide every sunday at 2am', () => {
    expect(
      combine(
        on.dayOfTheWeek(6),
        every.month(),
        every.dayOfTheMonth(),
        at.hour(2),
        at.minute(0)
      ).toString()
    ).toBe('0 2 * * 6');
  });
});
