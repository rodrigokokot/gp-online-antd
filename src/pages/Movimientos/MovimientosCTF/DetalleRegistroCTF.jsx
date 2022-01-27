import React ,{useState} from "react";
import Table from "../../../components/organisms/Table";
import { useParams } from "react-router-dom";
import {
  columnsRegistroCTF,
  dataRegistroCTF 
} from "../../../Mocks/DetalleRegistroCTF";

function DetalleRegistroCTF() {
   
  const { id } = useParams();
  return (
    <> 
        <h2> {id}</h2> 
        {/*FALTA AGREGAR BOTTON DE EXPORTAR  */}
        <Table data={dataRegistroCTF} columns={columnsRegistroCTF}></Table>
    </>
  );
}

export default DetalleRegistroCTF;