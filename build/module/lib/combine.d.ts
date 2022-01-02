import { DayOfTheMonthExpression, DayOfTheWeekExpression, HourExpression, MinuteExpression, MonthExpression } from './expression';
declare function combine(...expressions: [
    DayOfTheWeekExpression,
    MonthExpression,
    DayOfTheMonthExpression,
    HourExpression,
    MinuteExpression
]): MinuteExpression | HourExpression | DayOfTheMonthExpression | MonthExpression | DayOfTheWeekExpression;
export { combine };
