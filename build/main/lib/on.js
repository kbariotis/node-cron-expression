"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.on = void 0;
const expression_1 = require("./expression");
exports.on = {
    dayOfTheMonth: (dayOfTheMonth) => {
        return new expression_1.DayOfTheMonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: `${Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth}`,
        });
    },
    dayOfTheWeek: (dayOfTheWeek) => {
        return new expression_1.DayOfTheWeekExpression({
            minute: '0',
            hour: '0',
            dayOfTheWeek: `${Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek}`,
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUErRTtBQUtsRSxRQUFBLEVBQUUsR0FBRztJQUNoQixhQUFhLEVBQUUsQ0FBQyxhQUE4QixFQUFFLEVBQUU7UUFDaEQsT0FBTyxJQUFJLG9DQUF1QixDQUFDO1lBQ2pDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUc7WUFDVCxhQUFhLEVBQUUsR0FDYixLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUMzRCxFQUFFO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLFlBQTRCLEVBQUUsRUFBRTtRQUM3QyxPQUFPLElBQUksbUNBQXNCLENBQUM7WUFDaEMsTUFBTSxFQUFFLEdBQUc7WUFDWCxJQUFJLEVBQUUsR0FBRztZQUNULFlBQVksRUFBRSxHQUNaLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQ3pELEVBQUU7U0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyJ9