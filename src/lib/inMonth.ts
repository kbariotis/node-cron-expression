import { MonthExpression } from './expression';

/**
 * In specific month or multiple specific months
 *
 * ```
 * inMonth(3); // * * * 3 *
 * ```
 *
 */
export const inMonth = (month: Month | Month[]) => {
  return new MonthExpression({
    month: `${Array.isArray(month) ? month.join(',') : month}`,
  });
};
