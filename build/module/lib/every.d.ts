import 'jest';
import { DayOfTheMonthExpression, DayOfTheWeekExpression, HourExpression, MinuteExpression, MonthExpression } from './expression';
declare type EveryMinute = Minute;
declare type EveryHour = Hour;
declare type EveryMonth = Month;
export declare const every: {
    minute: () => MinuteExpression;
    hour: () => HourExpression;
    month: () => MonthExpression;
    dayOfTheMonth: (dayOfTheMonth?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | undefined) => DayOfTheMonthExpression;
    dayOfTheWeek: (dayOfTheWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | undefined) => DayOfTheWeekExpression;
    minutes: (minute: EveryMinute) => MinuteExpression;
    hours: (hour: EveryHour) => HourExpression;
    months: (month: EveryMonth) => MonthExpression;
};
export {};
