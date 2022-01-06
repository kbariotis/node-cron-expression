import 'jest';
import {
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

/**
 * Every single minute or every X minute after current date time
 *
 * ```
 * everyMinute(3); // *\/3 * * * *
 * ```
 */
export const everyMinute = (minute?: Minute) => {
  return new MinuteExpression({
    minute: minute !== undefined ? `${minute}` : undefined,
  });
};

/**
 * Every single hour or every X hours after current date time. Defaults
 * to the first minute of that hour.
 *
 * ```
 * everyHour(3); // 0 *\/3 * * *
 * ```
 */
export const everyHour = (hour?: Hour) => {
  return new HourExpression({
    minute: '0',
    hour: hour !== undefined ? `${hour}` : undefined,
  });
};

/**
 * Every single month or every X months after current date time. Defaults
 * to the first minute, first hour and first day of the month.
 *
 * ```
 * everyHour(3); // 0 *\/3 * * *
 * ```
 */
export const everyMonth = (month?: Month) => {
  return new MonthExpression({
    minute: '0',
    hour: '0',
    dayOfTheMonth: '1',
    month: month !== undefined ? `${month}` : month,
  });
};

/**
 * Every X time point
 *
 * ```
 * every(3).minutes(); // *\/3 * * *
 * every(3).hours(); // 0 *\/3 * * *
 * every(3).months(); // 0 0 1 *\/3 *
 * ```
 */
export const every = (input: number) => {
  return {
    minutes: () =>
      new MinuteExpression({
        minute: `*/${input}`,
      }),
    hours: () =>
      new HourExpression({
        minute: '0',
        hour: `*/${input}`,
      }),
    months: () =>
      new MonthExpression({
        minute: '0',
        hour: '0',
        dayOfTheMonth: '1',
        month: `*/${input}`,
      }),
  };
};
