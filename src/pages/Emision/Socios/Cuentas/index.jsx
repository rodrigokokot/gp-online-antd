import React, { useEffect, useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import { Link } from "react-router-dom";
import {
  GestionCuentaSearch,
  dataGestionCuenta,
  columnsGestionCuenta,
} from "./mock";
import { Col, Button } from "antd";
import test from "../../../../services/test";

/* hacer que router tengo la dir de app.js  */
const GestionCuentas = () => {
  const [data, setData] = useState("");

  async function handleCallback(values) {
    const response  =  await test.getProductos()
    console.log(response.data.lista)
    setData(response.data.lista);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/socios/cuentas/crearCuenta">
          <Button type="primary" size="small">
            Nueva Cuenta
          </Button>
        </Link>
      </Col>
      <SearchForm
        span={4}
        array={GestionCuentaSearch}
        parentCallback={handleCallback}
        title="Busqueda de gestión de cuentas"
      />
      <br></br>
      <Table data={data} columns={columnsGestionCuenta} />
    </>
  );
};
export default GestionCuentas;
