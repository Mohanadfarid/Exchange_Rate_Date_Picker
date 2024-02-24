import { FunctionComponent } from "react";
import "./calender.scss";
import { DateState } from "../../DatePicker";
import { getDay, getDaysInMonth } from "date-fns";

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
const monthsOfYear = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

interface CalenderProps {
  date: DateState;
  changeDateHandler: (year?: number, month?: number, day?: number) => void;
}
const Calender: FunctionComponent<CalenderProps> = ({ date }) => {
  const numberOfDaysInCurrentMonth = getDaysInMonth(
    new Date(date.year, date.month - 1)
  );

  const firstDayOfCurrentMonthNumber = getDay(
    new Date(date.year, date.month - 1, 1)
  );

  const lastDayOfCurrentMonthNumber =
    getDay(new Date(date.year, date.month - 1, numberOfDaysInCurrentMonth)) + 1;

  const numberOfDaysInPrevMonth = getDaysInMonth(
    new Date(date.year, date.month - 2) // -1 to get the right month and another -1 to get the prev month
  );

  return (
    <div className="calender">
      <div className="calender_month-year-picker">
        <div className="monthes-controller">{"<<"}</div>
        <div>
          {monthsOfYear[date.month - 1]} {date.year}
        </div>
        <div className="monthes-controller">{">>"}</div>
      </div>

      <div className="calender_day-picker">
        {/* looping over the days of the week */}
        {daysOfWeek.map((day, index) => (
          <div className="cell day-of-week" key={index}>
            {day}
          </div>
        ))}

        {/* looping over the prefix of the current month (prev month's last days) */}
        {Array.from({ length: firstDayOfCurrentMonthNumber }).map(
          (_, index) => (
            <div className="cell prefix-cell" key={index}>
              {
                numberOfDaysInPrevMonth -
                  (firstDayOfCurrentMonthNumber - index - 1) //itrating in reverse over the last days of the prev month
              }
            </div>
          )
        )}

        {/* looping over the days of current month */}
        {Array.from({ length: numberOfDaysInCurrentMonth }).map((_, index) => (
          <div className="cell" key={index}>
            {index + 1}
          </div>
        ))}

        {/* looping over postfix of the current month (next month's first days) */}
        {Array.from({ length: 7 - lastDayOfCurrentMonthNumber }).map(
          (_, index) => (
            <div className="cell postfix-cell" key={index}>
              {index + 1}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calender;
