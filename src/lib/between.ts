import {
  DayOfTheMonthExpression,
  DayOfTheWeekExpression,
  Expression,
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

/**
 * Provide two time points of the same type
 * to create a range
 *
 * @example
 * between(atMinute(2), atMinute(20)); // 2-20 * * * *
 *
 */
export function between<T extends Expression>(
  startExpression: T,
  endExpression: T
) {
  if (
    startExpression instanceof MinuteExpression &&
    endExpression instanceof MinuteExpression
  ) {
    return new Expression({
      minute: `${startExpression.getMinute()}-${endExpression.getMinute()}`,
    });
  }
  if (
    startExpression instanceof HourExpression &&
    endExpression instanceof HourExpression
  ) {
    return new Expression({
      hour: `${startExpression.getHour()}-${endExpression.getHour()}`,
    });
  }
  if (
    startExpression instanceof MonthExpression &&
    endExpression instanceof MonthExpression
  ) {
    return new Expression({
      month: `${startExpression.getMonth()}-${endExpression.getMonth()}`,
    });
  }
  if (
    startExpression instanceof DayOfTheMonthExpression &&
    endExpression instanceof DayOfTheMonthExpression
  ) {
    return new Expression({
      dayOfTheMonth: `${startExpression.getDayOfTheMonth()}-${endExpression.getDayOfTheMonth()}`,
    });
  }
  if (
    startExpression instanceof DayOfTheWeekExpression &&
    endExpression instanceof DayOfTheWeekExpression
  ) {
    return new Expression({
      dayOfTheWeek: `${startExpression.getDayOfTheWeek()}-${endExpression.getDayOfTheWeek()}`,
    });
  }

  throw new Error('Unrecognized class or input params of different type');
}
