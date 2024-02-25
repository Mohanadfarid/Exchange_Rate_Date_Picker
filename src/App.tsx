import { useState } from "react";
import "./App.scss";
import DatePicker from "./components/Date picker/DatePicker";
import ExchangeTable from "./components/Exchange table/ExchangeTable";
import { differenceInCalendarDays } from "date-fns";

export type DateState = {
  year: number;
  month: number;
  day: number;
};

function App() {
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

  return (
    <>
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        ChangeStartDateHandler={ChangeStartDateHandler}
        ChangeEndDateHandler={ChangeEndDateHandler}
      />
      <ExchangeTable startDate={startDate} endDate={endDate} />
    </>
  );
}

export default App;
