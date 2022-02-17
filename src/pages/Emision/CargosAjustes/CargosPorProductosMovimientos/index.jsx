import { Button, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  dataCPMovimiento,
  columnsCPMovimiento,
  CPMovimientoSearch,
} from "./mock";
function CPMovimiento() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCPMovimiento);
  }
  return (
    <>
    <Col style={{ textAlign: "right", marginBottom: "25px" }}>
    {/* width ver tamaño en Mocks*/}
    <Link to="/emision/cargosAjustes/cargosPorProductosAfinidad/crearCargoPorProductoYAfinidad">
      <Button type="primary" size="large">
        Nuevo Cargo
      </Button>
    </Link>
  </Col>
      <SearchForm
        title="Búsqueda de tipos de Cargos a Socios por producto y movimiento"
        array={CPMovimientoSearch}
        span={6}
        parentCallback={handleCallback}
      ></SearchForm>
      <br />
      <Table data={data} columns={columnsCPMovimiento}></Table>
    </>
  );
}

export default CPMovimiento;
