import React, { useState } from "react";
import SearchForm from "../../../components/organisms/SearchForm/index";
import Table from "../../../components/organisms/Table/index";
import { Link } from "react-router-dom";
import {
  GestionUsuariosSearch,
  dataGestionUsuarios,
  ColumnsGestionUsuarios,
} from "./mock";
import { Col, Button } from "antd";
import { useTranslation } from "react-i18next";

function GestionUsuario() {
    const { t } = useTranslation();
  const [data, setData] = useState("");

   
  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionUsuarios);
  }
 
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/usuarios/gestionDeUsuarios/crearUsuario">
          <Button type="primary" size="large"> 
          {t("gestionusuarios.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        span={6}
        array={GestionUsuariosSearch()}
        parentCallback={handleCallback}
        title={t("gestionusuarios.search.searchtitle")}
      />
      <br />
      <Table data={data} columns={ColumnsGestionUsuarios()} />
    </>
  );
}

export default GestionUsuario;
