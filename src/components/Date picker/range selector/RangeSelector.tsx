import { FunctionComponent } from "react";
import "./rangeSelector.scss";
import Calender from "./calender/Calender";
interface RangeSelectorProps {}

const RangeSelector: FunctionComponent<RangeSelectorProps> = () => {
  return (
    <div className="range-selector-container">
      <div className="named-range">This Year</div>
      <div className="named-range">This Month</div>
      <div className="named-range">This Week</div>
      <div className="calender">
        <Calender />
      </div>
      <div className="calender">
        <Calender />
      </div>
    </div>
  );
};

export default RangeSelector;
