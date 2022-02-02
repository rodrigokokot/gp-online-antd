import React from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { columnsMovimientoDeCuenta, dataMovimientoDeCuenta, MovimientoDeCuentaSearch } from "./mock";

const MovimientosDeCuenta = () => {
  return (
    <>
      <SearchForm
        title="Búsqueda de movimientos de cuentas"
        array={MovimientoDeCuentaSearch}
      />
      <br></br>
      <Table data={dataMovimientoDeCuenta} columns={columnsMovimientoDeCuenta}></Table>
    </>
  );
};

export default MovimientosDeCuenta;
