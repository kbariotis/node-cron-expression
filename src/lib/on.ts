import { DayOfTheMonthExpression, DayOfTheWeekExpression } from './expression';

/**
 * In specific day of the month
 *
 * ```
 * onDayOfTheMonth(3); // * * 3 * *
 * onDayOfTheMonth([3,5]); // * * 3,5 * *
 * ```
 *
 */
export const onDayOfTheMonth = (
  dayOfTheMonth: DayOfTheMonth | DayOfTheMonth[]
) => {
  return new DayOfTheMonthExpression({
    minute: '0',
    hour: '0',
    dayOfTheMonth: `${
      Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth
    }`,
  });
};

const map = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
};

/**
 * In specific day of the week
 *
 * ```
 * onDayOfTheWeek(3); // 0 0 * * 3
 * onDayOfTheWeek([3,5]); // 0 0 * * 3,5
 *
 * onDayOfTheWeek('Monday'); // 0 0 * * 1
 * onDayOfTheWeek(['Sunday', 'Thursday']); // 0 0 * * 0,4
 * ```
 */
export const onDayOfTheWeek = (
  dayOfTheWeek:
    | DayOfTheWeek
    | DayOfTheWeek[]
    | DayOfTheWeekLiteral
    | DayOfTheWeekLiteral[]
) => {
  const arrayInput = Array.isArray(dayOfTheWeek)
    ? dayOfTheWeek
    : [dayOfTheWeek];

  if (typeof arrayInput[0] === 'string') {
    return new DayOfTheWeekExpression({
      minute: '0',
      hour: '0',
      dayOfTheWeek: (arrayInput as DayOfTheWeekLiteral[])
        .map((day) => map[day])
        .join(','),
    });
  }

  return new DayOfTheWeekExpression({
    minute: '0',
    hour: '0',
    dayOfTheWeek: arrayInput.join(','),
  });
};
