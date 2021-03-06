import {
  DayOfTheMonthExpression,
  DayOfTheWeekExpression,
  Expression,
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

/**
 * Combine different time points
 *
 * ```
 * combine(atMinute(30), between(atHour(2), atHour(4))); // 30 2-4 * * *
 * ```
 */
function combine(
  ...expressions: Array<
    | DayOfTheWeekExpression
    | MonthExpression
    | DayOfTheMonthExpression
    | HourExpression
    | MinuteExpression
  >
) {
  return expressions.reduce((initial, current) => {
    if (current instanceof MinuteExpression) {
      initial.setMinute(current.getMinute());
    }
    if (current instanceof HourExpression) {
      initial.setHour(current.getHour());
    }
    if (current instanceof DayOfTheMonthExpression) {
      initial.setDayOfTheMonth(current.getDayOfTheMonth());
    }
    if (current instanceof MonthExpression) {
      initial.setMonth(current.getMonth());
    }
    if (current instanceof DayOfTheWeekExpression) {
      initial.setDayOfTheWeek(current.getDayOfTheWeek());
    }

    return initial;
  }, new Expression());
}

export { combine };
