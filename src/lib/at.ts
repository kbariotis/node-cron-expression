import { HourExpression, MinuteExpression } from './expression';

type AtMinute = Minute | Minute[];
type AtHour = Hour | Hour[];

export const at = {
  minute: (minute: AtMinute) => {
    return new MinuteExpression({
      minute: Array.isArray(minute) ? minute.join(',') : `${minute}`,
    });
  },
  hour: (hour: AtHour) => {
    return new HourExpression({
      hour: `${Array.isArray(hour) ? hour.join(',') : hour}`,
    });
  },
};
