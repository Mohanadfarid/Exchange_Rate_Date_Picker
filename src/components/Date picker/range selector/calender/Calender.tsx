import { FunctionComponent } from "react";
import "./calender.scss";
interface CalenderProps {}

const Calender: FunctionComponent<CalenderProps> = () => {
  return (
    <div className="calender">
      <div className="calender_month-year-picker">
        <div>{"<"}</div>
        <div>OCTOBER</div>
        <div>{">"}</div>
      </div>
      <div className="calender_day-picker">
        <div className="cell">S</div>
        <div className="cell">M</div>
        <div className="cell">T</div>
        <div className="cell">W</div>
        <div className="cell">T</div>
        <div className="cell">F</div>
        <div className="cell">S</div>

        <div className="cell">1</div>
        <div className="cell">2</div>
        <div className="cell">3</div>
        <div className="cell">4</div>
        <div className="cell">5</div>
        <div className="cell">6</div>
        <div className="cell">7</div>
        <div className="cell">8</div>
        <div className="cell">9</div>
        <div className="cell">10</div>
        <div className="cell">11</div>
        <div className="cell">12</div>
        <div className="cell">13</div>
        <div className="cell">14</div>
        <div className="cell">15</div>
        <div className="cell">16</div>
        <div className="cell">17</div>
        <div className="cell">18</div>
        <div className="cell">19</div>
        <div className="cell">20</div>
        <div className="cell">21</div>
        <div className="cell">22</div>
        <div className="cell">23</div>
        <div className="cell">24</div>
        <div className="cell">25</div>
        <div className="cell">26</div>
        <div className="cell">27</div>
        <div className="cell">29</div>
        <div className="cell">30</div>
        <div className="cell">31</div>
      </div>
    </div>
  );
};

export default Calender;
