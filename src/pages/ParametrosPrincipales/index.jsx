import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { Button, Col } from "antd";
import {
  ColumnsGestionSucursales,
  GestionSucursalesSearchMock,
} from "./mock";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import sucursales from "../../services/sucursales";

function GestionSucursales() {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const handleCallback = async (values) => {
    const res = await sucursales.getSucursales();
    console.log("sucursales:", res);
    setData(res);
  };

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
      <Table columns={ColumnsGestionSucursales()} data={data} />
    </>
  );
}

export default GestionSucursales;
