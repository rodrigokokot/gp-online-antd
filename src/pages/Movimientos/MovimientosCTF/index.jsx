import React, { useState } from "react";
import Searchform from "../../../components/organisms/SearchForm";
import Table from "../../../components/organisms/Table";
import {
  columnsMovimientosCTF,
  dataMovimientosCTF,
  MovimientosCTFSearch,
} from "./mock";

function MovimientosCTF() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataMovimientosCTF);
  }
  return (
    <>
      <Searchform
        title="Búsqueda de archivos CTF"
        parentCallback={handleCallback}
        array={MovimientosCTFSearch}
      />
      <br></br>
      <Table data={data} columns={columnsMovimientosCTF}></Table>
    </>
  );
}

export default MovimientosCTF;
