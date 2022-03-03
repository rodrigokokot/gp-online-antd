import { useState } from "react";

const useDataTable = () => {
  const [dataTable, setTable] = useState({
    initial: true,
    data: [],
    loading: false
  })

  const setDataTable = ({initial, data, loading}) => {
    setTable({initial, data, loading})
  }

  return{
    setDataTable,
    dataTable
  }
};
export default useDataTable;
