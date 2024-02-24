import { FunctionComponent } from "react";
import "./datePicker.scss";
import RangeSelector from "./range selector/RangeSelector";
interface DatePickerProps {}

const DatePicker: FunctionComponent<DatePickerProps> = () => {
  return (
    <>
      <div className="time-range-selector-container">
        <div className="date-selector">Strat</div>
        <div className="date-selector">End</div>
      </div>
      <RangeSelector />
    </>
  );
};

export default DatePicker;
