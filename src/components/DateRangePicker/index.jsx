import React, { useState } from 'react'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import * as locales from 'react-date-range/dist/locale';


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
        editableDateInputs={false}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        rangeColors={['#0DD8B0']}
        months={2}
        direction="horizontal"
        locale={locales['es']}
      />
    )
}

export default DateRangeComponent
