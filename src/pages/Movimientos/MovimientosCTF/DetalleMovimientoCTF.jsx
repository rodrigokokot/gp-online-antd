import React from "react";
import Export from "../../../components/organisms/Export";
import Table from "../../../components/organisms/Table";
import {
  dataDetallesCTF,
  columnsDetallesCTF,
} from "./mock";

function DetalleMovimientosCTF() {
  return (
    <>
      <Export dataExport={dataDetallesCTF}/>
      <Table data={dataDetallesCTF} columns={columnsDetallesCTF}></Table>
    </>
  );
}

export default DetalleMovimientosCTF;
