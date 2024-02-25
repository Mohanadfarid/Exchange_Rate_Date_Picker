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

  // checking if both dates are  equal
  const isDatesAreEqual =
    JSON.stringify(startDate) === JSON.stringify(endDate);

  return (
    <>
      <div className="time-range-selector-container">
        <div
          className="date-selector"
          onClick={() => {
            setIsRangeSelectorOpen(true);
          }}
        >
          {isDatesAreEqual
            ? "Start"
            : dateFormatter(startDate.year, startDate.month, startDate.day)}
        </div>

        <div
          className="date-selector"
          onClick={() => {
            setIsRangeSelectorOpen(true);
          }}
        >
          {isDatesAreEqual
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
