"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfTheWeekExpression = exports.MonthExpression = exports.DayOfTheMonthExpression = exports.HourExpression = exports.MinuteExpression = exports.Expression = void 0;
class Expression {
    constructor(params) {
        this.minute = (params && params.minute) || '*';
        this.hour = (params && params.hour) || '*';
        this.dayOfTheMonth = (params && params.dayOfTheMonth) || '*';
        this.month = (params && params.month) || '*';
        this.dayOfTheWeek = (params && params.dayOfTheWeek) || '*';
    }
    setMinute(minute) {
        this.minute = minute;
    }
    setHour(hour) {
        this.hour = hour;
    }
    setDayOfTheMonth(dayOfTheMonth) {
        this.dayOfTheMonth = dayOfTheMonth;
    }
    setMonth(month) {
        this.month = month;
    }
    setDayOfTheWeek(dayOfTheWeek) {
        this.dayOfTheWeek = dayOfTheWeek;
    }
    getMinute() {
        return this.minute;
    }
    getHour() {
        return this.hour;
    }
    getDayOfTheMonth() {
        return this.dayOfTheMonth;
    }
    getMonth() {
        return this.month;
    }
    getDayOfTheWeek() {
        return this.dayOfTheWeek;
    }
    toString() {
        return `${this.minute} ${this.hour} ${this.dayOfTheMonth} ${this.month} ${this.dayOfTheWeek}`;
    }
}
exports.Expression = Expression;
class MinuteExpression extends Expression {
}
exports.MinuteExpression = MinuteExpression;
class HourExpression extends Expression {
}
exports.HourExpression = HourExpression;
class DayOfTheMonthExpression extends Expression {
}
exports.DayOfTheMonthExpression = DayOfTheMonthExpression;
class MonthExpression extends Expression {
}
exports.MonthExpression = MonthExpression;
class DayOfTheWeekExpression extends Expression {
}
exports.DayOfTheWeekExpression = DayOfTheWeekExpression;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZXhwcmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFVBQVU7SUFPckIsWUFBWSxNQU1YO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQy9DLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRU0sU0FBUyxDQUFDLE1BQWM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNNLE9BQU8sQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTSxnQkFBZ0IsQ0FBQyxhQUFxQjtRQUMzQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBQ00sUUFBUSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNNLGVBQWUsQ0FBQyxZQUFvQjtRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBRU0sU0FBUztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ00sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBQ00sZ0JBQWdCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBQ00sUUFBUTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBQ00sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVNLFFBQVE7UUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEcsQ0FBQztDQUNGO0FBeERELGdDQXdEQztBQUVELE1BQWEsZ0JBQWlCLFNBQVEsVUFBVTtDQUFHO0FBQW5ELDRDQUFtRDtBQUNuRCxNQUFhLGNBQWUsU0FBUSxVQUFVO0NBQUc7QUFBakQsd0NBQWlEO0FBQ2pELE1BQWEsdUJBQXdCLFNBQVEsVUFBVTtDQUFHO0FBQTFELDBEQUEwRDtBQUMxRCxNQUFhLGVBQWdCLFNBQVEsVUFBVTtDQUFHO0FBQWxELDBDQUFrRDtBQUNsRCxNQUFhLHNCQUF1QixTQUFRLFVBQVU7Q0FBRztBQUF6RCx3REFBeUQifQ==