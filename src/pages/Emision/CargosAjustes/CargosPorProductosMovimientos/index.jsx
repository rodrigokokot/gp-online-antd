import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  dataCPMovimiento,
  columnsCPMovimiento,
  CPMovimientoSearch,
} from "./mock";
function CPMovimiento() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCPMovimiento);
  }
  return (
    <>
      <SearchForm
        title="Búsqueda de tipos de Cargos a Socios por producto y movimiento"
        array={CPMovimientoSearch}
        span={6}
        parentCallback={handleCallback}
      ></SearchForm>
      <br />
      <Table data={data} columns={columnsCPMovimiento}></Table>
    </>
  );
}

export default CPMovimiento;
