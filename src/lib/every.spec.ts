import { every, everyHour, everyMinute, everyMonth } from './every';

describe('every', () => {
  it('should provide every minute', () => {
    expect(everyMinute().toString()).toBe('* * * * *');
  });

  it('should provide on specific minute', () => {
    expect(everyMinute(5).toString()).toBe('5 * * * *');
  });

  it('should provide on specific month', () => {
    expect(everyMonth(5).toString()).toBe('0 0 1 5 *');
  });

  it('should provide every 2 minutes', () => {
    expect(every(2).minutes().toString()).toBe('*/2 * * * *');
  });

  it('should provide every even minute', () => {
    expect(every(2).minutes().toString()).toBe('*/2 * * * *');
  });

  it('should provide every 5 minutes', () => {
    expect(every(5).minutes().toString()).toBe('*/5 * * * *');
  });

  it('should provide every quarter hour', () => {
    expect(every(15).minutes().toString()).toBe('*/15 * * * *');
  });

  it('should provide every half hour', () => {
    expect(every(30).minutes().toString()).toBe('*/30 * * * *');
  });

  it('should provide every hour', () => {
    expect(everyHour().toString()).toBe('0 * * * *');
  });

  it('should provide every 1 hour', () => {
    expect(every(1).hours().toString()).toBe('0 */1 * * *');
  });

  it('should provide every 2 hours', () => {
    expect(every(2).hours().toString()).toBe('0 */2 * * *');
  });
});
