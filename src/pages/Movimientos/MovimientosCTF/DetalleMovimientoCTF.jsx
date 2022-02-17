import React from "react";
import Export from "../../../components/organisms/Export";
import Table from "../../../components/organisms/Table";
import {
  dataDetallesCTF,
  ColumnsDetallesCTF,
} from "./mock";

function DetalleMovimientosCTF() {
  return (
    <>
      <Export dataExport={dataDetallesCTF}/>
      <Table data={dataDetallesCTF} columns={ColumnsDetallesCTF()}></Table>
    </>
  );
}

export default DetalleMovimientosCTF;
