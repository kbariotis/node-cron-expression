"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const on_1 = require("./on");
describe('on', () => {
    it('on Sunday', () => {
        expect(on_1.on.dayOfTheWeek(6).toString()).toBe('0 0 * * 6');
    });
    it('on 3rd day of the month', () => {
        expect(on_1.on.dayOfTheMonth(3).toString()).toBe('0 0 3 * *');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib24uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvb24uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZCQUEwQjtBQUUxQixRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUNsQixFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtRQUNuQixNQUFNLENBQUMsT0FBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxRCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLEVBQUU7UUFDakMsTUFBTSxDQUFDLE9BQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9