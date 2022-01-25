import { Button } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/organisms/Table";
import { columnsDetalleRegistroIPM, dataDetalleRegistroIPM } from "../../Mocks/DetalleRegistroIPM";

function DetalleMovimientoIPM() {
  const { registro,id } = useParams();
  console.log(registro);
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
      <h4>Detalle de registro{registro}</h4>
      <Button>Exportar</Button>
      
      <Table data={dataDetalleRegistroIPM} columns={columnsDetalleRegistroIPM}></Table>
    </>
  );
}

export default DetalleMovimientoIPM;