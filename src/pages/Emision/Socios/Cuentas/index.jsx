import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import { Link } from "react-router-dom";
import {
  GestionCuentaSearch,
<<<<<<< HEAD
  dataGestionCuenta,
  ColumnsGestionCuenta,
=======
  columnsGestionCuenta,
>>>>>>> b78177f7230f1685672da1d658cf1108aea068bd
} from "./mock";
import { Col, Button } from "antd";
import { useTranslation } from "react-i18next";
import {cuentas} from "../../../../services";

/* hacer que router tengo la dir de app.js  */
const GestionCuentas = () => {
  const { t} = useTranslation();
  const [data, setData] = useState([]);

  async function handleCallback(values) {
    let request="";
    for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        const element = values[key];
        if(element){
          request = `${request}${key}=${element}&`
        }
      }
    }
    console.log('request:',request)
    const response = await cuentas.getCuentas(request);
    console.log('response:',response);
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
