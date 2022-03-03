import { useState } from "react";

const useSelectAsync = () => {
  const [dataSelect, setSelect] = useState({
    data: [],
    loading: true
  })

  const setDataSelect = ({ data, loading }) => {
    data = [
      {
        value: "",
        title: "",
      },
      ...data
    ]
    setSelect({ data, loading })
  }

  return{
    setDataSelect,
    dataSelect
  }
};
export default useSelectAsync;
