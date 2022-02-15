import React, { useState } from "react";
import Searchform from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import {
  columnsMovimientosIPM,
  dataMovimientosIPM,
  MovimientosIPMSearch,
} from "./mock";

function MovimientosIPM() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataMovimientosIPM);
  }

  return (
    <>
      <Searchform
        array={MovimientosIPMSearch}
        title={"Búsqueda de archivos IPM"}
        parentCallback={handleCallback}
        span={6}
      ></Searchform>
      <br></br>
      <Table data={data} columns={columnsMovimientosIPM}></Table>
    </>
  );
}

export default MovimientosIPM;
