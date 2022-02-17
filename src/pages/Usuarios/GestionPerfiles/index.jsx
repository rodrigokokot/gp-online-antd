import React, { useState } from "react";
import { Col, Button } from "antd";
import Table from "../../../components/organisms/Table";
import SearchForm from "../../../components/organisms/SearchForm";
import { Link } from "react-router-dom";
import {
  GestionPerfilesSearchMock,
  dataGestionPerfiles,
  ColumnsGestionPerfiles,
} from "./mock";
import { useTranslation } from 'react-i18next';

function GestionPerfiles() {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionPerfiles);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/usuarios/gestionDePerfiles/crearPerfil">
          <Button type="primary" size="large">
             {t("gestionperfiles.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionPerfilesSearchMock()}
        parentCallback={handleCallback}
        title={t("gestionperfiles.search.searchtitle")}
        span={6}
      />
      <br />
      <Table data={data} columns={ColumnsGestionPerfiles()} />
    </>
  );
}

export default GestionPerfiles;
