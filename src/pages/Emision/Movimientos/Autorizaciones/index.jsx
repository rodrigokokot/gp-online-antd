import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import SearchForm from "../../../../components/organisms/SearchForm/index";
import Table from "../../../../components/organisms/Table/index";
import {
  AutorizacionesSearchArray,
  ColumnsAutorizaciones,
  dataAutorizaciones,
} from "./mock";
import { useTranslation } from "react-i18next";

export default function AutorizacionesSearch() {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataAutorizaciones);
  }
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/movimientos/autorizaciones/crearAutorizacion">
          <Button type="primary" size="large">
          {t("autorizaciones.button")}
          </Button>
        </Link>
      </Col>

      <SearchForm
        array={AutorizacionesSearchArray()}
        title={t("autorizaciones.search.searchtitle")}
        parentCallback={handleCallback}
        span={4}
      />
      <br />
      <Table data={data} columns={ColumnsAutorizaciones()} />
    </>
  );
}
