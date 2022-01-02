import { every } from './every';

describe('every', () => {
  it('every minute', () => {
    expect(every.minute().toString()).toBe('* * * * *');
  });

  it('every 2 minutes', () => {
    expect(every.minutes(2).toString()).toBe('*/2 * * * *');
  });

  it('every even minute', () => {
    expect(every.minutes(2).toString()).toBe('*/2 * * * *');
  });

  it('every 5 minutes', () => {
    expect(every.minutes(5).toString()).toBe('*/5 * * * *');
  });

  it('every quarter hour', () => {
    expect(every.minutes(15).toString()).toBe('*/15 * * * *');
  });

  it('every half hour', () => {
    expect(every.minutes(30).toString()).toBe('*/30 * * * *');
  });

  it('every hour', () => {
    expect(every.hour().toString()).toBe('0 * * * *');
  });

  it('every 1 hour', () => {
    expect(every.hours(1).toString()).toBe('0 */1 * * *');
  });

  it('every 2 hours', () => {
    expect(every.hours(2).toString()).toBe('0 */2 * * *');
  });

  it('every day', () => {
    expect(every.dayOfTheWeek().toString()).toBe('0 0 * * *');
  });

  it('every sunday', () => {
    expect(every.dayOfTheWeek(6).toString()).toBe('0 0 * * */6');
  });
});
