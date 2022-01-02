import { DayOfTheMonthExpression, DayOfTheWeekExpression } from './expression';

type OnDayOfTheMonth = DayOfTheMonth | DayOfTheMonth[];
type OnDayOfTheWeek = DayOfTheWeek | DayOfTheWeek[];

export const on = {
  dayOfTheMonth: (dayOfTheMonth: OnDayOfTheMonth) => {
    return new DayOfTheMonthExpression({
      minute: '0',
      hour: '0',
      dayOfTheMonth: `${
        Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth
      }`,
    });
  },
  dayOfTheWeek: (dayOfTheWeek: OnDayOfTheWeek) => {
    return new DayOfTheWeekExpression({
      minute: '0',
      hour: '0',
      dayOfTheWeek: `${
        Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek
      }`,
    });
  },
};
