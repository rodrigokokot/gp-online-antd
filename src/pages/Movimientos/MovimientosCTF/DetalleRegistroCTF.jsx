import React from "react";
import Table from "../../../components/organisms/Table";
import { useParams } from "react-router-dom";
import {
  ColumnsRegistroCTF,
  dataRegistroCTF,
} from "./mock";
import Export from "../../../components/organisms/Export";

function DetalleRegistroCTF() {
  const { id } = useParams();
  return (
    <>
      <h2> {id}</h2>
      <Export dataExport={dataRegistroCTF} />
      <Table data={dataRegistroCTF} columns={ColumnsRegistroCTF()}></Table>
    </>
  );
}

export default DetalleRegistroCTF;
