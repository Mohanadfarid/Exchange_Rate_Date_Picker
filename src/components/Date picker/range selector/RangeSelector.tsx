import { FunctionComponent } from "react";
import "./rangeSelector.scss";
import Calender from "./calender/Calender";
import { DateState } from "../DatePicker";

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
  return (
    <div className="range-selector-container">
      <div className="named-range">This Year</div>
      <div className="named-range">This Month</div>
      <div className="named-range">This Week</div>

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
