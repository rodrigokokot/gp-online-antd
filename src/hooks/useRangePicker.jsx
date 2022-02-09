import { useState } from "react";

const useRangePicker = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      // endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const setStateRangePicker=(value)=>{
    setState(value)
  }

  return{state,setStateRangePicker}
};
export default useRangePicker;
