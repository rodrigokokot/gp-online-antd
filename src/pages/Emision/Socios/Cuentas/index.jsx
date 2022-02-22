import React, { useEffect, useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import { Link } from "react-router-dom";
import {
  GestionCuentaSearch,
  dataGestionCuenta,
  ColumnsGestionCuenta,
} from "./mock";
import { Col, Button } from "antd";
import test from "../../../../services/test";
import { useTranslation } from "react-i18next";

/* hacer que router tengo la dir de app.js  */
const GestionCuentas = () => {
  const { t} = useTranslation();
  const [data, setData] = useState([]);

  async function handleCallback() {
    const response  =  await test.getCuentas()
    console.log(response)
    setData(response);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/socios/cuentas/crearCuenta">
          <Button type="primary" size="small">
            {t("gestioncuenta.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        span={4}
        array={GestionCuentaSearch()}
        parentCallback={handleCallback}
        title={t("gestioncuenta.search.searchtitle")}
      />
      <br></br>
      <Table data={data} columns={ColumnsGestionCuenta()} />
    </>
  );
};
export default GestionCuentas;
