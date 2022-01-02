import { DayOfTheMonthExpression, DayOfTheWeekExpression, Expression, HourExpression, MinuteExpression, MonthExpression, } from './expression';
export function between(startExpression, endExpression) {
    if (startExpression instanceof MinuteExpression &&
        endExpression instanceof MinuteExpression) {
        return new Expression({
            minute: `${startExpression.getMinute()}-${endExpression.getMinute()}`,
        });
    }
    if (startExpression instanceof HourExpression &&
        endExpression instanceof HourExpression) {
        return new Expression({
            hour: `${startExpression.getHour()}-${endExpression.getHour()}`,
        });
    }
    if (startExpression instanceof MonthExpression &&
        endExpression instanceof MonthExpression) {
        return new Expression({
            month: `${startExpression.getMonth()}-${endExpression.getMonth()}`,
        });
    }
    if (startExpression instanceof DayOfTheMonthExpression &&
        endExpression instanceof DayOfTheMonthExpression) {
        return new Expression({
            dayOfTheMonth: `${startExpression.getDayOfTheMonth()}-${endExpression.getDayOfTheMonth()}`,
        });
    }
    if (startExpression instanceof DayOfTheWeekExpression &&
        endExpression instanceof DayOfTheWeekExpression) {
        return new Expression({
            dayOfTheWeek: `${startExpression.getDayOfTheWeek()}-${endExpression.getDayOfTheWeek()}`,
        });
    }
    throw new Error('Unrecognized class or input params of different type');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmV0d2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvYmV0d2Vlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixVQUFVLEVBQ1YsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sY0FBYyxDQUFDO0FBRXRCLE1BQU0sVUFBVSxPQUFPLENBQ3JCLGVBQWtCLEVBQ2xCLGFBQWdCO0lBRWhCLElBQ0UsZUFBZSxZQUFZLGdCQUFnQjtRQUMzQyxhQUFhLFlBQVksZ0JBQWdCLEVBQ3pDO1FBQ0EsT0FBTyxJQUFJLFVBQVUsQ0FBQztZQUNwQixNQUFNLEVBQUUsR0FBRyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFO1NBQ3RFLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFDRSxlQUFlLFlBQVksY0FBYztRQUN6QyxhQUFhLFlBQVksY0FBYyxFQUN2QztRQUNBLE9BQU8sSUFBSSxVQUFVLENBQUM7WUFDcEIsSUFBSSxFQUFFLEdBQUcsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRTtTQUNoRSxDQUFDLENBQUM7S0FDSjtJQUNELElBQ0UsZUFBZSxZQUFZLGVBQWU7UUFDMUMsYUFBYSxZQUFZLGVBQWUsRUFDeEM7UUFDQSxPQUFPLElBQUksVUFBVSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxhQUFhLENBQUMsUUFBUSxFQUFFLEVBQUU7U0FDbkUsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUNFLGVBQWUsWUFBWSx1QkFBdUI7UUFDbEQsYUFBYSxZQUFZLHVCQUF1QixFQUNoRDtRQUNBLE9BQU8sSUFBSSxVQUFVLENBQUM7WUFDcEIsYUFBYSxFQUFFLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixFQUFFLElBQUksYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7U0FDM0YsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxJQUNFLGVBQWUsWUFBWSxzQkFBc0I7UUFDakQsYUFBYSxZQUFZLHNCQUFzQixFQUMvQztRQUNBLE9BQU8sSUFBSSxVQUFVLENBQUM7WUFDcEIsWUFBWSxFQUFFLEdBQUcsZUFBZSxDQUFDLGVBQWUsRUFBRSxJQUFJLGFBQWEsQ0FBQyxlQUFlLEVBQUUsRUFBRTtTQUN4RixDQUFDLENBQUM7S0FDSjtJQUVELE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztBQUMxRSxDQUFDIn0=