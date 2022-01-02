export class Expression {
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
export class MinuteExpression extends Expression {
}
export class HourExpression extends Expression {
}
export class DayOfTheMonthExpression extends Expression {
}
export class MonthExpression extends Expression {
}
export class DayOfTheWeekExpression extends Expression {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwcmVzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZXhwcmVzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sVUFBVTtJQU9yQixZQUFZLE1BTVg7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztRQUM3RCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDO0lBQzdELENBQUM7SUFFTSxTQUFTLENBQUMsTUFBYztRQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ00sT0FBTyxDQUFDLElBQVk7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUNNLGdCQUFnQixDQUFDLGFBQXFCO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFDTSxRQUFRLENBQUMsS0FBYTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBQ00sZUFBZSxDQUFDLFlBQW9CO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ25DLENBQUM7SUFFTSxTQUFTO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDTSxPQUFPO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFDTSxnQkFBZ0I7UUFDckIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFDTSxRQUFRO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDTSxlQUFlO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRU0sUUFBUTtRQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRyxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsVUFBVTtDQUFHO0FBQ25ELE1BQU0sT0FBTyxjQUFlLFNBQVEsVUFBVTtDQUFHO0FBQ2pELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxVQUFVO0NBQUc7QUFDMUQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsVUFBVTtDQUFHO0FBQ2xELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxVQUFVO0NBQUcifQ==