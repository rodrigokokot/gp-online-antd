import { useState } from "react";
import { format } from "date-fns"

const useRangePicker = () => {
  const initialState = [
    {
      startDate: new Date(),
      endDate: new Date(),
      // endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]
  const initialHours = {
    startHour: format((new Date()).setHours(0, 0, 0), "HH:mm:ss"),
    endHour: format((new Date()).setHours(23, 59, 59), "HH:mm:ss"),
  }
  const initialType = "presentacion"

  const [state, setState] = useState(initialState);
  const [hours, setHours] = useState(initialHours);
  const [searchType, setSearchType] = useState(initialType);

  const setStateRangePicker=(value)=> {
    setState(!value? initialState : value)
  }

  const setHoursRangePicker = (value) => {
    setHours(!value? initialHours : value)
  }

  const setSearchTypeRangePicker = (value) => {
    setSearchType(!value? initialType : value)
  }

  return{
    state,
    hours,
    searchType,
    setStateRangePicker,
    setHoursRangePicker,
    setSearchTypeRangePicker
  }
};
export default useRangePicker;
