import 'jest';
import {
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

export const everyMinute = (minute?: Minute) => {
  return new MinuteExpression({
    minute: minute !== undefined ? `${minute}` : undefined,
  });
};

export const everyHour = (hour?: Hour) => {
  return new HourExpression({
    minute: '0',
    hour: hour !== undefined ? `${hour}` : undefined,
  });
};

export const everyMonth = (month?: Month) => {
  return new MonthExpression({
    minute: '0',
    hour: '0',
    dayOfTheMonth: '1',
    month: month !== undefined ? `${month}` : month,
  });
};

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
