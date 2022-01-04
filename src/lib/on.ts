import { DayOfTheMonthExpression, DayOfTheWeekExpression } from './expression';

type OnDayOfTheMonth = DayOfTheMonth | DayOfTheMonth[];
type OnDayOfTheWeek = DayOfTheWeek | DayOfTheWeek[];

export const onDayOfTheMonth = (dayOfTheMonth: OnDayOfTheMonth) => {
  return new DayOfTheMonthExpression({
    minute: '0',
    hour: '0',
    dayOfTheMonth: `${
      Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth
    }`,
  });
};

export const onDayOfTheWeek = (dayOfTheWeek: OnDayOfTheWeek) => {
  return new DayOfTheWeekExpression({
    minute: '0',
    hour: '0',
    dayOfTheWeek: `${
      Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek
    }`,
  });
};
