import React  from "react";
import Table from "../../../components/organisms/Table";
import { useParams } from "react-router-dom";
import {
  columnsRegistroCTF,
  dataRegistroCTF 
} from "../../../Mocks/DetalleRegistroCTF";
import Export from "../../../components/organisms/Export";

function DetalleRegistroCTF() {
   
  const { id } = useParams();
  return (
    <> 
        <h2> {id}</h2> 
        <Table data={dataRegistroCTF} columns={columnsRegistroCTF} actions={<Export />}></Table>
    </>
  );
}

export default DetalleRegistroCTF;