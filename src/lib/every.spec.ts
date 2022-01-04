import { every } from './every';

describe('every', () => {
  it('should provide every minute', () => {
    expect(every.minute().toString()).toBe('* * * * *');
  });

  it('should provide every 2 minutes', () => {
    expect(every.minutes(2).toString()).toBe('*/2 * * * *');
  });

  it('should provide every even minute', () => {
    expect(every.minutes(2).toString()).toBe('*/2 * * * *');
  });

  it('should provide every 5 minutes', () => {
    expect(every.minutes(5).toString()).toBe('*/5 * * * *');
  });

  it('should provide every quarter hour', () => {
    expect(every.minutes(15).toString()).toBe('*/15 * * * *');
  });

  it('should provide every half hour', () => {
    expect(every.minutes(30).toString()).toBe('*/30 * * * *');
  });

  it('should provide every hour', () => {
    expect(every.hour().toString()).toBe('0 * * * *');
  });

  it('should provide every 1 hour', () => {
    expect(every.hours(1).toString()).toBe('0 */1 * * *');
  });

  it('should provide every 2 hours', () => {
    expect(every.hours(2).toString()).toBe('0 */2 * * *');
  });
});
