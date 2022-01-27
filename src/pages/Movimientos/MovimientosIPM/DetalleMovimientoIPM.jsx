import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/organisms/Table";
import { columnsDetalleMovimientosIPM, dataDetalleMovimientosIPM } from "../../../Mocks/DetalleMovimientoIPM";

function DetalleMovimientoIPM() {
  const { id } = useParams();
  console.log(id);
  const handleCallback = (values) => {
    console.log(`from parent: ${values}`);
  };

  // useEffect(() => {
  //   getUser(id);
    
  // });
  
  //LOS DATOS DE LA TABLA TIENEN QUE SER DEL USUARIO SELECCIONADO
  return (
    <>
      <h2>Id file {id}</h2>
      
      <Table data={dataDetalleMovimientosIPM} columns={columnsDetalleMovimientosIPM}></Table>
    </>
  );
}

export default DetalleMovimientoIPM;
