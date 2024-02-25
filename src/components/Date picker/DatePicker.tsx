import { FunctionComponent, useState } from "react";
import "./datePicker.scss";
import RangeSelector from "./range selector/RangeSelector";
import { differenceInCalendarDays } from "date-fns";

export type DateState = {
  year: number;
  month: number;
  day: number;
};

const DatePicker: FunctionComponent = () => {
  //inilizing the date of the calenders to the current date
  const currentDate = new Date();
  const initialDate = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };

  const [startDate, setStartDate] = useState<DateState>(initialDate);
  const [endDate, setEndDate] = useState<DateState>(initialDate);
  const [isRangeSelectorOpen, setIsRangeSelectorOpen] =
    useState<boolean>(false);

  const ChangeStartDateHandler = (
    year?: number,
    month?: number,
    day?: number
  ) => {
    setStartDate((prevState) => {
      const updatedStartDate = {
        ...prevState,
        year: year ?? prevState.year,
        month: month ?? prevState.month,
        day: day ?? prevState.day,
      };

      const isStartDateBeforeEndDate =
        differenceInCalendarDays(
          new Date(endDate.year, endDate.month, endDate.day),
          new Date(
            updatedStartDate.year,
            updatedStartDate.month,
            updatedStartDate.day
          )
        ) < 0;

      if (isStartDateBeforeEndDate) {
        alert("The start date must precede the end date!");
        return prevState; // Prevent updating start date
      } else {
        return updatedStartDate;
      }
    });
  };

  const ChangeEndDateHandler = (
    year?: number,
    month?: number,
    day?: number
  ) => {
    setEndDate((prevState) => {
      const updatedStartDate = {
        ...prevState,
        year: year ?? prevState.year,
        month: month ?? prevState.month,
        day: day ?? prevState.day,
      };

      const isStartDateBeforeEndDate =
        differenceInCalendarDays(
          new Date(
            updatedStartDate.year,
            updatedStartDate.month,
            updatedStartDate.day
          ),
          new Date(startDate.year, startDate.month, startDate.day)
        ) < 0;

      if (isStartDateBeforeEndDate) {
        alert("The end date must come after the start date!");
        return prevState; // Prevent updating start date
      } else {
        return updatedStartDate;
      }
    });
  };

  // a helper function to create a formated date
  const dateFormatter = (year: number, month: number, day: number): string => {
    const formatedDate = new Date(year, month, day).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
    );
    return formatedDate;
  };

  // checking if the user hasn't picked a date yet
  const isBothDatesOnDefult =
    JSON.stringify(initialDate) === JSON.stringify(startDate) &&
    JSON.stringify(initialDate) == JSON.stringify(endDate);

  return (
    <>
      <div className="time-range-selector-container">
        <div
          className="date-selector"
          onClick={() => {
            setIsRangeSelectorOpen(true);
          }}
        >
          {isBothDatesOnDefult
            ? "Start"
            : dateFormatter(startDate.year, startDate.month, startDate.day)}
        </div>

        <div
          className="date-selector"
          onClick={() => {
            setIsRangeSelectorOpen(true);
          }}
        >
          {isBothDatesOnDefult
            ? "End"
            : dateFormatter(endDate.year, endDate.month, endDate.day)}
        </div>
      </div>
      {isRangeSelectorOpen && (
        <RangeSelector
          setIsRangeSelectorOpen={setIsRangeSelectorOpen}
          startDate={startDate}
          endDate={endDate}
          ChangeStartDateHandler={ChangeStartDateHandler}
          ChangeEndDateHandler={ChangeEndDateHandler}
        />
      )}
    </>
  );
};

export default DatePicker;
