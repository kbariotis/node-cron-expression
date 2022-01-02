import {
  DayOfTheMonthExpression,
  DayOfTheWeekExpression,
  Expression,
  HourExpression,
  MinuteExpression,
  MonthExpression,
} from './expression';

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
