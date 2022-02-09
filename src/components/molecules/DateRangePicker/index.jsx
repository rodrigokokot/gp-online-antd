import React, { useEffect, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";
import * as locales from "react-date-range/dist/locale";
import "./index.less";
import useRangePicker from "../../../hooks/useRangePicker";

function DateRangeComponent({ className, dateSelected, ...props }) {
  const { state, setStateRangePicker } = useRangePicker();
  // useEffect(() => {
  //   setStateRangePicker([{
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     // endDate: addDays(new Date(), 7),
  //     key: "selection",
  //   }]);
  // }, []);

  return (
    <DateRange
      className={className}
      editableDateInputs={false}
      showDateDisplay={false}
      onChange={(item) => {
        console.log(state)
        dateSelected([item.selection]);
        setStateRangePicker([item.selection]);
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
