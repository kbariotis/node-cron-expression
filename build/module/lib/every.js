import 'jest';
import { DayOfTheMonthExpression, DayOfTheWeekExpression, HourExpression, MinuteExpression, MonthExpression, } from './expression';
export const every = {
    minute: () => {
        return new MinuteExpression({});
    },
    hour: () => {
        return new HourExpression({
            minute: '0',
        });
    },
    month: () => {
        return new MonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: '1',
        });
    },
    dayOfTheMonth: (dayOfTheMonth) => {
        return new DayOfTheMonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: dayOfTheMonth !== undefined ? `*/${dayOfTheMonth}` : undefined,
        });
    },
    dayOfTheWeek: (dayOfTheWeek) => {
        return new DayOfTheWeekExpression({
            minute: '0',
            hour: '0',
            dayOfTheWeek: dayOfTheWeek !== undefined ? `*/${dayOfTheWeek}` : undefined,
        });
    },
    minutes: (minute) => {
        return new MinuteExpression({
            minute: `*/${minute}`,
        });
    },
    hours: (hour) => {
        return new HourExpression({
            minute: '0',
            hour: `*/${hour}`,
        });
    },
    months: (month) => {
        return new MonthExpression({
            minute: '0',
            hour: '0',
            dayOfTheMonth: '1',
            month: `*/${month}`,
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2V2ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsY0FBYyxFQUNkLGdCQUFnQixFQUNoQixlQUFlLEdBQ2hCLE1BQU0sY0FBYyxDQUFDO0FBUXRCLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRztJQUNuQixNQUFNLEVBQUUsR0FBRyxFQUFFO1FBQ1gsT0FBTyxJQUFJLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ1QsT0FBTyxJQUFJLGNBQWMsQ0FBQztZQUN4QixNQUFNLEVBQUUsR0FBRztTQUNaLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFO1FBQ1YsT0FBTyxJQUFJLGVBQWUsQ0FBQztZQUN6QixNQUFNLEVBQUUsR0FBRztZQUNYLElBQUksRUFBRSxHQUFHO1lBQ1QsYUFBYSxFQUFFLEdBQUc7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELGFBQWEsRUFBRSxDQUFDLGFBQWtDLEVBQUUsRUFBRTtRQUNwRCxPQUFPLElBQUksdUJBQXVCLENBQUM7WUFDakMsTUFBTSxFQUFFLEdBQUc7WUFDWCxJQUFJLEVBQUUsR0FBRztZQUNULGFBQWEsRUFDWCxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ2pFLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxZQUFZLEVBQUUsQ0FBQyxZQUFnQyxFQUFFLEVBQUU7UUFDakQsT0FBTyxJQUFJLHNCQUFzQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUc7WUFDVCxZQUFZLEVBQ1YsWUFBWSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUMvRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsT0FBTyxFQUFFLENBQUMsTUFBbUIsRUFBRSxFQUFFO1FBQy9CLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQztZQUMxQixNQUFNLEVBQUUsS0FBSyxNQUFNLEVBQUU7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELEtBQUssRUFBRSxDQUFDLElBQWUsRUFBRSxFQUFFO1FBQ3pCLE9BQU8sSUFBSSxjQUFjLENBQUM7WUFDeEIsTUFBTSxFQUFFLEdBQUc7WUFDWCxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU0sRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtRQUM1QixPQUFPLElBQUksZUFBZSxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxHQUFHO1lBQ1gsSUFBSSxFQUFFLEdBQUc7WUFDVCxhQUFhLEVBQUUsR0FBRztZQUNsQixLQUFLLEVBQUUsS0FBSyxLQUFLLEVBQUU7U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMifQ==