import 'jest';
import {
  DayOfTheMonthExpression,
  DayOfTheWeekExpression,
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

type EveryMinute = Minute;
type EveryHour = Hour;
type EveryDayOfTheMonth = DayOfTheMonth;
type EveryMonth = Month;
type EveryDayOfTheWeek = DayOfTheWeek;

export const every = {
  minute: () => {
    return new MinuteExpression({});
  },
  hour: () => {
    return new HourExpression({
      minute: '0',
    });
  },
  month: () => {
    return new MonthExpression({
      minute: '0',
      hour: '0',
      dayOfTheMonth: '1',
    });
  },
  dayOfTheMonth: (dayOfTheMonth?: EveryDayOfTheMonth) => {
    return new DayOfTheMonthExpression({
      minute: '0',
      hour: '0',
      dayOfTheMonth:
        dayOfTheMonth !== undefined ? `*/${dayOfTheMonth}` : undefined,
    });
  },
  dayOfTheWeek: (dayOfTheWeek?: EveryDayOfTheWeek) => {
    return new DayOfTheWeekExpression({
      minute: '0',
      hour: '0',
      dayOfTheWeek:
        dayOfTheWeek !== undefined ? `*/${dayOfTheWeek}` : undefined,
    });
  },
  minutes: (minute: EveryMinute) => {
    return new MinuteExpression({
      minute: `*/${minute}`,
    });
  },
  hours: (hour: EveryHour) => {
    return new HourExpression({
      minute: '0',
      hour: `*/${hour}`,
    });
  },
  months: (month: EveryMonth) => {
    return new MonthExpression({
      minute: '0',
      hour: '0',
      dayOfTheMonth: '1',
      month: `*/${month}`,
    });
  },
};
