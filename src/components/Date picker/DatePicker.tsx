import { FunctionComponent, useState } from "react";
import "./datePicker.scss";
import RangeSelector from "./range selector/RangeSelector";

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

  const ChangeStartDateHandler = (
    year?: number,
    month?: number,
    day?: number
  ) => {
    setStartDate((prevState) => {
      return {
        ...prevState,
        year: year ?? prevState.year,
        month: month ?? prevState.month,
        day: day ?? prevState.day,
      };
    });
  };

  const ChangeEndDateHandler = (
    year?: number,
    month?: number,
    day?: number
  ) => {
    setEndDate((prevState) => {
      return {
        ...prevState,
        year: year ?? prevState.year,
        month: month ?? prevState.month,
        day: day ?? prevState.day,
      };
    });
  };

  return (
    <>
      <div className="time-range-selector-container">
        <div className="date-selector">Start</div>
        <div className="date-selector">End</div>
      </div>
      <RangeSelector
        startDate={startDate}
        endDate={endDate}
        ChangeStartDateHandler={ChangeStartDateHandler}
        ChangeEndDateHandler={ChangeEndDateHandler}
      />
    </>
  );
};

export default DatePicker;
