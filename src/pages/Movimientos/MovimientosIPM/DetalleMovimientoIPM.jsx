import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../../components/organisms/Table";
import { columnsDetalleMovimientosIPM, dataDetalleMovimientosIPM } from "./mock";
import {Card, Switch} from 'antd';

function DetalleMovimientoIPM() {
  const { id } = useParams();
  console.log(id);

  function handleChange(value){
    console.log(value)
  }

  return (
    <>
      <h2>Id file {id}</h2>
      <h4>Fecha de proceso "variable date"</h4>
      <h4>Tipo de archivo "variable tipo archivo"</h4>
      <Card size='small'>
        <h4>Estado del registro</h4>
        <Switch checkedChildren="Urgente" unCheckedChildren="Normal" onChange={handleChange} ></Switch>
      </Card>
      <br></br>
      <Table data={dataDetalleMovimientosIPM} columns={columnsDetalleMovimientosIPM}></Table>
    </>
  );
}

export default DetalleMovimientoIPM;
