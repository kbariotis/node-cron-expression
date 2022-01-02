"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inMonth = void 0;
const expression_1 = require("./expression");
exports.inMonth = (month) => {
    return new expression_1.MonthExpression({
        month: `${Array.isArray(month) ? month.join(',') : month}`,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5Nb250aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaW5Nb250aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBK0M7QUFFbEMsUUFBQSxPQUFPLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEVBQUU7SUFDaEQsT0FBTyxJQUFJLDRCQUFlLENBQUM7UUFDekIsS0FBSyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO0tBQzNELENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9