import { useState, useRef } from "react";
import { DateRange } from "react-date-range";
import format from "date-fns/format";
// import { alldays } from "date-fns";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import styles from "./DateRange.module.css";

const DateRanger = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection"
    }
  ]);

  const refOne = useRef(null);

  const [showCalender, setShowCalender] = useState(false);

  const hideCalender = () => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  };

  const hideOnClickOutside = (e) => {
    // console.log(e.target.id);
    // console.log(refOne.current)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setShowCalender(false);
    }
  };

  const hideOnEscape = (e) => {
    // console.log(e.key);
    if (e.key === "Escape") {
      setShowCalender(false);
      document.removeEventListener("keydown", hideOnEscape, true);
    }
  };

  hideCalender();

  const handleOnSelect = () => {
    // hideCalender();
  };

  return (
    <div>
      <span for="startDate" className="me-1 text-secondary">
        <i className="fa fa-calendar"></i>
      </span>
      <input
        value={`${format(state[0].startDate, "dd/MM/yyyy")} to ${format(
          state[0].endDate,
          "dd/MM/yyyy"
        )}`}
        className={`inputBox p-2 ${styles.inputText} text-center`}
        onClick={() => setShowCalender((showCalender) => !showCalender)}
        readOnly
      />

      <div ref={refOne} onSelect={handleOnSelect} id="divDate">
        {showCalender && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            // onChange={onChanger}
            className={`date ${styles.calender}`}
            moveRangeOnFirstSelection={false}
            ranges={state}
          />
        )}
      </div>
    </div>
  );
};

export default DateRanger;
