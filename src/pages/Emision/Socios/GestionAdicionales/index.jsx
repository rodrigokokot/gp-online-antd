import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import {
  dataGestionAdicionales,
  columnsGestionAdicionales,
  GestionAdicionalesSearchArray,
} from "./mock";
const GestionAdicionalesSearch = () => {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    console.log(values)
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/socios/adicionales/crearSocioAdicional">
          <Button type="primary" size="large">
            Nuevo Adicional
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionAdicionalesSearchArray}
        title="Búsqueda de gestión de cuentas"
        span={4}
        parentCallback={handleCallback}
      />
      <Table
        columns={dataGestionAdicionales}
        data={columnsGestionAdicionales}
      />
    </>
  );
};
export default GestionAdicionalesSearch
