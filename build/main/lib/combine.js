"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combine = void 0;
const expression_1 = require("./expression");
function combine(...expressions) {
    return expressions.reduce((initial, current) => {
        if (current instanceof expression_1.MinuteExpression) {
            initial.setMinute(current.getMinute());
        }
        if (current instanceof expression_1.HourExpression) {
            initial.setHour(current.getHour());
        }
        if (current instanceof expression_1.DayOfTheMonthExpression) {
            initial.setDayOfTheMonth(current.getDayOfTheMonth());
        }
        if (current instanceof expression_1.MonthExpression) {
            initial.setMonth(current.getMonth());
        }
        if (current instanceof expression_1.DayOfTheWeekExpression) {
            initial.setDayOfTheWeek(current.getDayOfTheWeek());
        }
        return initial;
    }, new expression_1.Expression());
}
exports.combine = combine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tYmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FPc0I7QUFFdEIsU0FBUyxPQUFPLENBQ2QsR0FBRyxXQU1GO0lBRUQsT0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQzdDLElBQUksT0FBTyxZQUFZLDZCQUFnQixFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLE9BQU8sWUFBWSwyQkFBYyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLE9BQU8sWUFBWSxvQ0FBdUIsRUFBRTtZQUM5QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksT0FBTyxZQUFZLDRCQUFlLEVBQUU7WUFDdEMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0QztRQUNELElBQUksT0FBTyxZQUFZLG1DQUFzQixFQUFFO1lBQzdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7U0FDcEQ7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDLEVBQUUsSUFBSSx1QkFBVSxFQUFFLENBQUMsQ0FBQztBQUN2QixDQUFDO0FBRVEsMEJBQU8ifQ==