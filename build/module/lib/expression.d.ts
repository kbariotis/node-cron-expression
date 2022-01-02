export declare class Expression {
    private minute;
    private hour;
    private dayOfTheMonth;
    private month;
    private dayOfTheWeek;
    constructor(params?: {
        minute?: string;
        hour?: string;
        dayOfTheMonth?: string;
        month?: string;
        dayOfTheWeek?: string;
    });
    setMinute(minute: string): void;
    setHour(hour: string): void;
    setDayOfTheMonth(dayOfTheMonth: string): void;
    setMonth(month: string): void;
    setDayOfTheWeek(dayOfTheWeek: string): void;
    getMinute(): string;
    getHour(): string;
    getDayOfTheMonth(): string;
    getMonth(): string;
    getDayOfTheWeek(): string;
    toString(): string;
}
export declare class MinuteExpression extends Expression {
}
export declare class HourExpression extends Expression {
}
export declare class DayOfTheMonthExpression extends Expression {
}
export declare class MonthExpression extends Expression {
}
export declare class DayOfTheWeekExpression extends Expression {
}
