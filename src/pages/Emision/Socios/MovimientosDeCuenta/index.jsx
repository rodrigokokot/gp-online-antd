import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  columnsMovimientoDeCuenta,
  dataMovimientoDeCuenta,
  MovimientoDeCuentaSearch,
} from "./mock";

const MovimientosDeCuenta = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataMovimientoDeCuenta);
  }
  return (
    <>
      <SearchForm
        title="Búsqueda de movimientos de cuentas"
        array={MovimientoDeCuentaSearch}
        parentCallback={handleCallback}
        span={6}
      />
      <br></br>
      <Table
        data={data}
        columns={columnsMovimientoDeCuenta}
      ></Table>
    </>
  );
};

export default MovimientosDeCuenta;
