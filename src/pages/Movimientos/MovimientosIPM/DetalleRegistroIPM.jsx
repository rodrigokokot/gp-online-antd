import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/organisms/Table";
import { columnsDetalleRegistroIPM, dataDetalleRegistroIPM } from "./mock";
import Export from "../../../components/organisms/Export";

function DetalleMovimientoIPM() {
  const { registro, id } = useParams();
  // const ref = React.createRef();

  return (
    <>
      <h2>
        Id file {id} - IPM Detalle de registro {registro}
      </h2>
      <h4>Fecha del proceso "variable date"</h4>
      <Export dataExport={dataDetalleRegistroIPM} />

      <Table
        data={dataDetalleRegistroIPM}
        columns={columnsDetalleRegistroIPM}
      ></Table>
    </>
  );
}

export default DetalleMovimientoIPM;
