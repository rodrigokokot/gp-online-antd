import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';


function DateRangeComponent() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
    return (
      //   <DateRangePicker
      //   onChange={item => setState([item.selection])}
      //   showSelectionPreview={true}
      //   moveRangeOnFirstSelection={false}
      //   months={2}
      //   ranges={state}
      //   direction="horizontal"
      // />
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        months={2}
        direction="horizontal"
      />
    )
}

export default DateRangeComponent
