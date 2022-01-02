"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.between = void 0;
const expression_1 = require("./expression");
function between(startExpression, endExpression) {
    if (startExpression instanceof expression_1.MinuteExpression &&
        endExpression instanceof expression_1.MinuteExpression) {
        return new expression_1.Expression({
            minute: `${startExpression.getMinute()}-${endExpression.getMinute()}`,
        });
    }
    if (startExpression instanceof expression_1.HourExpression &&
        endExpression instanceof expression_1.HourExpression) {
        return new expression_1.Expression({
            hour: `${startExpression.getHour()}-${endExpression.getHour()}`,
        });
    }
    if (startExpression instanceof expression_1.MonthExpression &&
        endExpression instanceof expression_1.MonthExpression) {
        return new expression_1.Expression({
            month: `${startExpression.getMonth()}-${endExpression.getMonth()}`,
        });
    }
    if (startExpression instanceof expression_1.DayOfTheMonthExpression &&
        endExpression instanceof expression_1.DayOfTheMonthExpression) {
        return new expression_1.Expression({
            dayOfTheMonth: `${startExpression.getDayOfTheMonth()}-${endExpression.getDayOfTheMonth()}`,
        });
    }
    if (startExpression instanceof expression_1.DayOfTheWeekExpression &&
        endExpression instanceof expression_1.DayOfTheWeekExpression) {
        return new expression_1.Expression({
            dayOfTheWeek: `${startExpression.getDayOfTheWeek()}-${endExpression.getDayOfTheWeek()}`,
        });
    }
    throw new Error('Unrecognized class or input params of different type');
}
exports.between = between;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYmV0d2Vlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FPc0I7QUFFdEIsU0FBZ0IsT0FBTyxDQUNyQixlQUFrQixFQUNsQixhQUFnQjtJQUVoQixJQUNFLGVBQWUsWUFBWSw2QkFBZ0I7UUFDM0MsYUFBYSxZQUFZLDZCQUFnQixFQUN6QztRQUNBLE9BQU8sSUFBSSx1QkFBVSxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxHQUFHLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxhQUFhLENBQUMsU0FBUyxFQUFFLEVBQUU7U0FDdEUsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUNFLGVBQWUsWUFBWSwyQkFBYztRQUN6QyxhQUFhLFlBQVksMkJBQWMsRUFDdkM7UUFDQSxPQUFPLElBQUksdUJBQVUsQ0FBQztZQUNwQixJQUFJLEVBQUUsR0FBRyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFO1NBQ2hFLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFDRSxlQUFlLFlBQVksNEJBQWU7UUFDMUMsYUFBYSxZQUFZLDRCQUFlLEVBQ3hDO1FBQ0EsT0FBTyxJQUFJLHVCQUFVLENBQUM7WUFDcEIsS0FBSyxFQUFFLEdBQUcsZUFBZSxDQUFDLFFBQVEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxRQUFRLEVBQUUsRUFBRTtTQUNuRSxDQUFDLENBQUM7S0FDSjtJQUNELElBQ0UsZUFBZSxZQUFZLG9DQUF1QjtRQUNsRCxhQUFhLFlBQVksb0NBQXVCLEVBQ2hEO1FBQ0EsT0FBTyxJQUFJLHVCQUFVLENBQUM7WUFDcEIsYUFBYSxFQUFFLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLElBQUksYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7U0FDM0YsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUNFLGVBQWUsWUFBWSxtQ0FBc0I7UUFDakQsYUFBYSxZQUFZLG1DQUFzQixFQUMvQztRQUNBLE9BQU8sSUFBSSx1QkFBVSxDQUFDO1lBQ3BCLFlBQVksRUFBRSxHQUFHLGVBQWUsQ0FBQyxlQUFlLEVBQUUsSUFBSSxhQUFhLENBQUMsZUFBZSxFQUFFLEVBQUU7U0FDeEYsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7QUFDMUUsQ0FBQztBQTlDRCwwQkE4Q0MifQ==