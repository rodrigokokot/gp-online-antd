import { Button } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/organisms/Table";
import {
  columnsDetalleRegistroIPM,
  dataDetalleRegistroIPM,
} from "../../../Mocks/DetalleRegistroIPM";
import Export from "../../components/organisms/Export";

function DetalleMovimientoIPM() {
  const { registro, id } = useParams();

  return (
    <>
      <h2>Id file {id} - IPM Detalle de registro procesado</h2>
      <h4>Fecha del proceso "variable date"</h4>
      <Table
        data={dataDetalleRegistroIPM}
        columns={columnsDetalleRegistroIPM}
        actions={<Export/>}
      ></Table>
    </>
  );
}

export default DetalleMovimientoIPM;
