import { FunctionComponent } from "react";
import "./rangeSelector.scss";
import Calender from "./calender/Calender";
import { DateState } from "../DatePicker";
import { startOfWeek } from "date-fns";

interface RangeSelectorProps {
  startDate: DateState;
  endDate: DateState;
  ChangeStartDateHandler: (year?: number, month?: number, day?: number) => void;
  ChangeEndDateHandler: (year?: number, month?: number, day?: number) => void;
}

const RangeSelector: FunctionComponent<RangeSelectorProps> = ({
  startDate,
  endDate,
  ChangeStartDateHandler,
  ChangeEndDateHandler,
}) => {
  const currentDate = new Date();

  const setRangeToThisYear = () => {
    ChangeStartDateHandler(currentDate.getFullYear(), 1, 1);
  };

  const setRangeToThisMonth = () => {
    ChangeStartDateHandler(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
  };

  const setRangeToThisWeek = () => {
    const startOfWeekDay = startOfWeek(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        currentDate.getDate()
      )
    ).getDate();
    
    ChangeStartDateHandler(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      startOfWeekDay
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
    </div>
  );
};

export default RangeSelector;
