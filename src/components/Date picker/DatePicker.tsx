import { FunctionComponent, useState } from "react";
import "./datePicker.scss";
import RangeSelector from "./range selector/RangeSelector";
import { DateState } from "../../App";

interface DatePickerProps {
  startDate: DateState;
  endDate: DateState;
  ChangeStartDateHandler: (year?: number, month?: number, day?: number) => void;
  ChangeEndDateHandler: (year?: number, month?: number, day?: number) => void;
}
const DatePicker: FunctionComponent<DatePickerProps> = ({
  startDate,
  endDate,
  ChangeStartDateHandler,
  ChangeEndDateHandler,
}) => {
  const currentDate = new Date();
  const initialDate = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };

  const [isRangeSelectorOpen, setIsRangeSelectorOpen] =
    useState<boolean>(false);

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
