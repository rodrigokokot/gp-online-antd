import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import {
  AutorizacionesSearchArray,
  columnsAutorizaciones,
  dataAutorizaciones,
} from "./mock";

export default function AutorizacionesSearch() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataAutorizaciones);
  }
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/movimientos/autorizaciones/nuevo">
          <Button type="primary" size="small">
            Nueva Autorización
          </Button>
        </Link>
      </Col>

      <SearchForm
        array={AutorizacionesSearchArray}
        title="Busqueda de autorizaciones"
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table data={data} columns={columnsAutorizaciones} />
    </>
  );
}
