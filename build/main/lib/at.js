"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.at = void 0;
const expression_1 = require("./expression");
exports.at = {
    minute: (minute) => {
        return new expression_1.MinuteExpression({
            minute: Array.isArray(minute) ? minute.join(',') : `${minute}`,
        });
    },
    hour: (hour) => {
        return new expression_1.HourExpression({
            hour: `${Array.isArray(hour) ? hour.join(',') : hour}`,
        });
    },
    month: (month) => {
        return new expression_1.MonthExpression({
            month: `${Array.isArray(month) ? month.join(',') : month}`,
        });
    },
    dayOfTheMonth: (dayOfTheMonth) => {
        return new expression_1.DayOfTheMonthExpression({
            dayOfTheMonth: `${Array.isArray(dayOfTheMonth) ? dayOfTheMonth.join(',') : dayOfTheMonth}`,
        });
    },
    dayOfTheWeek: (dayOfTheWeek) => {
        return new expression_1.DayOfTheWeekExpression({
            dayOfTheWeek: `${Array.isArray(dayOfTheWeek) ? dayOfTheWeek.join(',') : dayOfTheWeek}`,
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQU1zQjtBQVFULFFBQUEsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxDQUFDLE1BQWdCLEVBQUUsRUFBRTtRQUMzQixPQUFPLElBQUksNkJBQWdCLENBQUM7WUFDMUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFO1NBQy9ELENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLEVBQUUsQ0FBQyxJQUFZLEVBQUUsRUFBRTtRQUNyQixPQUFPLElBQUksMkJBQWMsQ0FBQztZQUN4QixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7U0FDdkQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLEtBQWMsRUFBRSxFQUFFO1FBQ3hCLE9BQU8sSUFBSSw0QkFBZSxDQUFDO1lBQ3pCLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUMzRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsYUFBYSxFQUFFLENBQUMsYUFBOEIsRUFBRSxFQUFFO1FBQ2hELE9BQU8sSUFBSSxvQ0FBdUIsQ0FBQztZQUNqQyxhQUFhLEVBQUUsR0FDYixLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUMzRCxFQUFFO1NBQ0gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELFlBQVksRUFBRSxDQUFDLFlBQTRCLEVBQUUsRUFBRTtRQUM3QyxPQUFPLElBQUksbUNBQXNCLENBQUM7WUFDaEMsWUFBWSxFQUFFLEdBQ1osS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFDekQsRUFBRTtTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDIn0=