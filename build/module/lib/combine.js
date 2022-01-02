import { DayOfTheMonthExpression, DayOfTheWeekExpression, Expression, HourExpression, MinuteExpression, MonthExpression, } from './expression';
function combine(...expressions) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY29tYmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sY0FBYyxDQUFDO0FBRXRCLFNBQVMsT0FBTyxDQUNkLEdBQUcsV0FNRjtJQUVELE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRTtRQUM3QyxJQUFJLE9BQU8sWUFBWSxnQkFBZ0IsRUFBRTtZQUN2QyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxPQUFPLFlBQVksY0FBYyxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLE9BQU8sWUFBWSx1QkFBdUIsRUFBRTtZQUM5QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksT0FBTyxZQUFZLGVBQWUsRUFBRTtZQUN0QyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxPQUFPLFlBQVksc0JBQXNCLEVBQUU7WUFDN0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsRUFBRSxJQUFJLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDdkIsQ0FBQztBQUVELE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyJ9