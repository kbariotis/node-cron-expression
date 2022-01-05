import { MonthExpression } from './expression';

const map = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

/**
 * In specific month or multiple specific months
 *
 * ```
 * inMonth(3); // * * * 3 *
 * inMonth([3,5]); // * * * 3,5 *
 *
 * inMonth('January'); // * * * 1 *
 * inMonth(['January', 'December']); // * * * 1,12 *
 * ```
 *
 */
export const inMonth = (
  month: Month | Month[] | MonthLiteral | MonthLiteral[]
) => {
  const arrayInput = Array.isArray(month) ? month : [month];

  if (typeof arrayInput[0] === 'string') {
    return new MonthExpression({
      month: (arrayInput as MonthLiteral[])
        .map((month) => map[month])
        .join(','),
    });
  }

  return new MonthExpression({
    month: arrayInput.join(','),
  });
};
