import 'jest';
import {
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

type EveryMinute = Minute;
type EveryHour = Hour;
type EveryMonth = Month;

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
