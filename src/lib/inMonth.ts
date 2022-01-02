import { MonthExpression } from './expression';

export const inMonth = (month: Month | Month[]) => {
  return new MonthExpression({
    month: `${Array.isArray(month) ? month.join(',') : month}`,
  });
};
