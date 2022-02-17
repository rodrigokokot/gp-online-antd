import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { Button, Col } from "antd";
import {
  ColumnsGestionSucursales,
  dataGestionSucursales,
  GestionSucursalesSearchMock,
} from "./mock";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function GestionSucursales() {
  const { t } = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionSucursales);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/parametrosPrincipales/gestionDeSucursales/crearSucursal">
          <Button type="primary" size="large">
            {t("gestionsucursales.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionSucursalesSearchMock()}
        parentCallback={handleCallback}
        title={t("gestionsucursales.search.searchtitle")}
        span={4}
      />
      <br />
      <Table
        columns={ColumnsGestionSucursales()}
        data={data} //datafiltered
        expandible={false}
        editable={true}
      />
    </>
  );
}

export default GestionSucursales;
