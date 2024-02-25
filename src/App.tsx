import { useState } from "react";
import "./App.scss";
import DatePicker from "./components/Date picker/DatePicker";
import ExchangeTable, {
  ExchangeRow,
} from "./components/Exchange table/ExchangeTable";
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
  // to be deleted when acctual data come from the api
  const exchangeRowsDataPlaceHolder: ExchangeRow[] = [
    { date: "03/09/2022", egp: 19.99, cad: 0.79 },
    { date: "04/09/2022", egp: 18.79, cad: 0.89 },
    { date: "05/09/2022", egp: 19.34, cad: 0.98 },
  ];

  return (
    <>
      <DatePicker
        startDate={startDate}
        endDate={endDate}
        ChangeStartDateHandler={ChangeStartDateHandler}
        ChangeEndDateHandler={ChangeEndDateHandler}
      />
      <ExchangeTable exchangeRows={exchangeRowsDataPlaceHolder} />
    </>
  );
}

export default App;
