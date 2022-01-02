"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.every = void 0;
require("jest");
const expression_1 = require("./expression");
exports.every = {
    minute: () => {
        return new expression_1.MinuteExpression({});
    },
    hour: () => {
        return new expression_1.HourExpression({
            minute: '0',
        });
    },
    month: () => {
        return new expression_1.MonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: '1',
        });
    },
    dayOfTheMonth: (dayOfTheMonth) => {
        return new expression_1.DayOfTheMonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: dayOfTheMonth !== undefined ? `*/${dayOfTheMonth}` : undefined,
        });
    },
    dayOfTheWeek: (dayOfTheWeek) => {
        return new expression_1.DayOfTheWeekExpression({
            minute: '0',
            hour: '0',
            dayOfTheWeek: dayOfTheWeek !== undefined ? `*/${dayOfTheWeek}` : undefined,
        });
    },
    minutes: (minute) => {
        return new expression_1.MinuteExpression({
            minute: `*/${minute}`,
        });
    },
    hours: (hour) => {
        return new expression_1.HourExpression({
            minute: '0',
            hour: `*/${hour}`,
        });
    },
    months: (month) => {
        return new expression_1.MonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: '1',
            month: `*/${month}`,
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2V2ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdCQUFjO0FBQ2QsNkNBTXNCO0FBUVQsUUFBQSxLQUFLLEdBQUc7SUFDbkIsTUFBTSxFQUFFLEdBQUcsRUFBRTtRQUNYLE9BQU8sSUFBSSw2QkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsSUFBSSxFQUFFLEdBQUcsRUFBRTtRQUNULE9BQU8sSUFBSSwyQkFBYyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDVixPQUFPLElBQUksNEJBQWUsQ0FBQztZQUN6QixNQUFNLEVBQUUsR0FBRztZQUNYLElBQUksRUFBRSxHQUFHO1lBQ1QsYUFBYSxFQUFFLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGFBQWEsRUFBRSxDQUFDLGFBQWtDLEVBQUUsRUFBRTtRQUNwRCxPQUFPLElBQUksb0NBQXVCLENBQUM7WUFDakMsTUFBTSxFQUFFLEdBQUc7WUFDWCxJQUFJLEVBQUUsR0FBRztZQUNULGFBQWEsRUFDWCxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2pFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxZQUFnQyxFQUFFLEVBQUU7UUFDakQsT0FBTyxJQUFJLG1DQUFzQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUc7WUFDVCxZQUFZLEVBQ1YsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUMvRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUMsTUFBbUIsRUFBRSxFQUFFO1FBQy9CLE9BQU8sSUFBSSw2QkFBZ0IsQ0FBQztZQUMxQixNQUFNLEVBQUUsS0FBSyxNQUFNLEVBQUU7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLElBQWUsRUFBRSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSwyQkFBYyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEtBQUssSUFBSSxFQUFFO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxNQUFNLEVBQUUsQ0FBQyxLQUFpQixFQUFFLEVBQUU7UUFDNUIsT0FBTyxJQUFJLDRCQUFlLENBQUM7WUFDekIsTUFBTSxFQUFFLEdBQUc7WUFDWCxJQUFJLEVBQUUsR0FBRztZQUNULGFBQWEsRUFBRSxHQUFHO1lBQ2xCLEtBQUssRUFBRSxLQUFLLEtBQUssRUFBRTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQyJ9