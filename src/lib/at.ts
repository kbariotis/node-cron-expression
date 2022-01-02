import {
  DayOfTheMonthExpression,
  DayOfTheWeekExpression,
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

type AtMinute = Minute | Minute[];
type AtHour = Hour | Hour[];
type AtMonth = Month | Month[];
type AtDayOfTheMonth = DayOfTheMonth | DayOfTheMonth[];
type AtDayOfTheWeek = DayOfTheWeek | DayOfTheWeek[];

export const at = {
  minute: (minute: AtMinute) => {
    return new MinuteExpression({
      minute: Array.isArray(minute) ? minute.join(',') : `${minute}`,
    });
  },
  hour: (hour: AtHour) => {
    return new HourExpression({
      hour: `${Array.isArray(hour) ? hour.join(',') : hour}`,
    });
  },
  month: (month: AtMonth) => {
    return new MonthExpression({
      month: `${Array.isArray(month) ? month.join(',') : month}`,
    });
  },
  dayOfTheMonth: (dayOfTheMonth: AtDayOfTheMonth) => {
    return new DayOfTheMonthExpression({
      dayOfTheMonth: `${
        Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth
      }`,
    });
  },
  dayOfTheWeek: (dayOfTheWeek: AtDayOfTheWeek) => {
    return new DayOfTheWeekExpression({
      dayOfTheWeek: `${
        Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek
      }`,
    });
  },
};
