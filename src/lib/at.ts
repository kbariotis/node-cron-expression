import { HourExpression, MinuteExpression } from './expression';

type AtMinute = Minute | Minute[];
type AtHour = Hour | Hour[];

/**
 * Set to run in a specific minute
 *
 * @param minute AtMinute
 */
export const atMinute = (minute: AtMinute) => {
  return new MinuteExpression({
    minute: Array.isArray(minute) ? minute.join(',') : `${minute}`,
  });
};

/**
 * Set to run in a specific hour
 *
 * @param minute AtHour
 */
export const atHour = (hour: AtHour) => {
  return new HourExpression({
    hour: `${Array.isArray(hour) ? hour.join(',') : hour}`,
  });
};
