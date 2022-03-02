import React, { useState } from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import {
  dataGestionAdicionales,
  ColumnsGestionAdicionales,
  GestionAdicionalesSearchArray,
} from "./mock";
import { useTranslation } from "react-i18next";
  const GestionAdicionalesSearch = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionAdicionales);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/socios/adicionales/crearSocioAdicional">
          <Button type="primary" size="large">
          {t("adicionales.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionAdicionalesSearchArray()}
        title={t("adicionales.search.searchtitle")}
        span={4}
        parentCallback={handleCallback}
      />
      <Table
        columns={ColumnsGestionAdicionales()}
        data={data}
      />
    </>
  );
};
export default GestionAdicionalesSearch
