import { DayOfTheMonthExpression, DayOfTheWeekExpression, HourExpression, MinuteExpression, MonthExpression } from './expression';
declare type AtMinute = Minute | Minute[];
declare type AtHour = Hour | Hour[];
declare type AtMonth = Month | Month[];
declare type AtDayOfTheMonth = DayOfTheMonth | DayOfTheMonth[];
declare type AtDayOfTheWeek = DayOfTheWeek | DayOfTheWeek[];
export declare const at: {
    minute: (minute: AtMinute) => MinuteExpression;
    hour: (hour: AtHour) => HourExpression;
    month: (month: AtMonth) => MonthExpression;
    dayOfTheMonth: (dayOfTheMonth: AtDayOfTheMonth) => DayOfTheMonthExpression;
    dayOfTheWeek: (dayOfTheWeek: AtDayOfTheWeek) => DayOfTheWeekExpression;
};
export {};
