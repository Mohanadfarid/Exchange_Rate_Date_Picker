import { FunctionComponent } from "react";
import "./rangeSelector.scss";
import Calender from "./calender/Calender";
import { DateState } from "../DatePicker";
import { startOfWeek } from "date-fns";

interface RangeSelectorProps {
  startDate: DateState;
  endDate: DateState;
  setIsRangeSelectorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ChangeStartDateHandler: (year?: number, month?: number, day?: number) => void;
  ChangeEndDateHandler: (year?: number, month?: number, day?: number) => void;
}

const RangeSelector: FunctionComponent<RangeSelectorProps> = ({
  startDate,
  endDate,
  setIsRangeSelectorOpen,
  ChangeStartDateHandler,
  ChangeEndDateHandler,
}) => {
  const currentDate = new Date();

  const setRangeToThisYear = () => {
    //setting the start date to the start of the year
    ChangeStartDateHandler(currentDate.getFullYear(), 1, 1);

    //setting the end date to the current date
    ChangeEndDateHandler(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
  };

  const setRangeToThisMonth = () => {
    //setting the start date to the start of the month
    ChangeStartDateHandler(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    //setting the end date to the current date
    ChangeEndDateHandler(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
  };

  const setRangeToThisWeek = () => {
    //getting the first day of current week
    const startOfWeekDay = startOfWeek(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    );

    //setting the start date to the first day of current week
    ChangeStartDateHandler(
      startOfWeekDay.getFullYear(),
      startOfWeekDay.getMonth(),
      startOfWeekDay.getDate()
    );

    //setting the end date to the current date
    ChangeEndDateHandler(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate()
    );
  };

  return (
    <div className="range-selector-container">
      <div className="named-range" onClick={setRangeToThisYear}>
        This Year
      </div>
      <div className="named-range" onClick={setRangeToThisMonth}>
        This Month
      </div>
      <div className="named-range" onClick={setRangeToThisWeek}>
        This Week
      </div>

      {/* start date calender */}
      <div className="calender">
        <Calender date={startDate} changeDateHandler={ChangeStartDateHandler} />
      </div>

      {/* end date calender */}
      <div className="calender">
        <Calender date={endDate} changeDateHandler={ChangeEndDateHandler} />
      </div>
      <div
        className="close-btn"
        onClick={() => {
          setIsRangeSelectorOpen(false);
        }}
      >
        X
      </div>
    </div>
  );
};

export default RangeSelector;
