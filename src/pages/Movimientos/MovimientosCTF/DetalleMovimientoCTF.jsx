import React from "react";
import Export from "../../../components/organisms/Export";
import Table from "../../../components/organisms/Table";
import {
  dataDetallesCTF,
  columnsDetallesCTF,
} from "../../../Mocks/DetalleMovimientoCTF";

function DetalleMovimientosCTF() {
  return (
    <>
      <Export />
      <Table data={dataDetallesCTF} columns={columnsDetallesCTF}></Table>
    </>
  );
}

export default DetalleMovimientosCTF;
