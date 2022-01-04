import { DayOfTheMonthExpression, DayOfTheWeekExpression } from './expression';

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

export const onDayOfTheWeek = (dayOfTheWeek: DayOfTheWeek | DayOfTheWeek[]) => {
  return new DayOfTheWeekExpression({
    minute: '0',
    hour: '0',
    dayOfTheWeek: `${
      Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek
    }`,
  });
};
