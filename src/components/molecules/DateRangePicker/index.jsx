import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "./index.less";

function DateRangeComponent({ className, dateSelected, range, ...props }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      // endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <DateRange
      className={className}
      editableDateInputs={false}
      showDateDisplay={false}
      onChange={(item) => {
        dateSelected([item.selection]);
        setState([item.selection]);
      }}
      moveRangeOnFirstSelection={false}
      ranges={state}
      rangeColors={["#0DD8B0"]}
      months={2}
      direction="horizontal"
      monthWidth={300}
      locale={locales["es"]}
    />
  );
}

export default DateRangeComponent;
