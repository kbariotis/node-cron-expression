import { HourExpression, MinuteExpression } from './expression';

/**
 * Set to run in a specific minute
 *
 * @example
 * atMinute(2); // 2 * * * *
 */
export const atMinute = (minute: Minute | Minute[]) => {
  return new MinuteExpression({
    minute: Array.isArray(minute) ? minute.join(',') : `${minute}`,
  });
};

/**
 * Set to run in a specific hour. Defaults to the first minute
 * of that hour
 *
 * @example
 * atHour(3); // 0 3 * * *
 */
export const atHour = (hour: Hour | Hour[]) => {
  return new HourExpression({
    hour: `${Array.isArray(hour) ? hour.join(',') : hour}`,
  });
};
