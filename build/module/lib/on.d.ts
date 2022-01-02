import { DayOfTheMonthExpression, DayOfTheWeekExpression } from './expression';
declare type OnDayOfTheMonth = DayOfTheMonth | DayOfTheMonth[];
declare type OnDayOfTheWeek = DayOfTheWeek | DayOfTheWeek[];
export declare const on: {
    dayOfTheMonth: (dayOfTheMonth: OnDayOfTheMonth) => DayOfTheMonthExpression;
    dayOfTheWeek: (dayOfTheWeek: OnDayOfTheWeek) => DayOfTheWeekExpression;
};
export {};
