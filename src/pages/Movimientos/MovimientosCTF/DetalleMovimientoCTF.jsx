import React ,{useState} from "react";
import Table from "../../../components/organisms/Table";
import {
  dataDetallesCTF, columnsDetallesCTF
} from "../../../Mocks/DetalleMovimientoCTF";

function DetalleMovimientosCTF() {
   
  return (
    <> 
        {/*FALTA AGREGAR BOTTON DE EXPORTAR  */}
        <Table data={dataDetallesCTF} columns={columnsDetallesCTF}></Table>
    </>
  );
}

export default DetalleMovimientosCTF;