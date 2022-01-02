export class Expression {
  private minute: string;
  private hour: string;
  private dayOfTheMonth: string;
  private month: string;
  private dayOfTheWeek: string;

  constructor(params?: {
    minute?: string;
    hour?: string;
    dayOfTheMonth?: string;
    month?: string;
    dayOfTheWeek?: string;
  }) {
    this.minute = (params && params.minute) || '*';
    this.hour = (params && params.hour) || '*';
    this.dayOfTheMonth = (params && params.dayOfTheMonth) || '*';
    this.month = (params && params.month) || '*';
    this.dayOfTheWeek = (params && params.dayOfTheWeek) || '*';
  }

  public setMinute(minute: string) {
    this.minute = minute;
  }
  public setHour(hour: string) {
    this.hour = hour;
  }
  public setDayOfTheMonth(dayOfTheMonth: string) {
    this.dayOfTheMonth = dayOfTheMonth;
  }
  public setMonth(month: string) {
    this.month = month;
  }
  public setDayOfTheWeek(dayOfTheWeek: string) {
    this.dayOfTheWeek = dayOfTheWeek;
  }

  public getMinute() {
    return this.minute;
  }
  public getHour() {
    return this.hour;
  }
  public getDayOfTheMonth() {
    return this.dayOfTheMonth;
  }
  public getMonth() {
    return this.month;
  }
  public getDayOfTheWeek() {
    return this.dayOfTheWeek;
  }

  public toString() {
    return `${this.minute} ${this.hour} ${this.dayOfTheMonth} ${this.month} ${this.dayOfTheWeek}`;
  }
}

export class MinuteExpression extends Expression {}
export class HourExpression extends Expression {}
export class DayOfTheMonthExpression extends Expression {}
export class MonthExpression extends Expression {}
export class DayOfTheWeekExpression extends Expression {}
