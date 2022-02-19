import { Button, Col } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  dataCPMovimiento,
  ColumnsCPMovimiento,
  CPMovimientoSearch,
} from "./mock";
function CPMovimiento() {
  const [data, setData] = useState("");
  const { t} = useTranslation();

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCPMovimiento);
  }
  return (
    <>
    <Col style={{ textAlign: "right", marginBottom: "25px" }}>
    {/* width ver tamaño en Mocks*/}
    <Link to="/emision/cargosAjustes/cargosPorProductosMovimientos/crearCargoPorProductosYMovimientos">
      <Button type="primary" size="large">
      {t("movimiento.button")}
      </Button>
    </Link>
  </Col>
      <SearchForm
        title={t("movimiento.search.searchtitle")}
        array={CPMovimientoSearch()}
        span={6}
        parentCallback={handleCallback}
      ></SearchForm>
      <br />
      <Table data={data} columns={ColumnsCPMovimiento()}></Table>
    </>
  );
}

export default CPMovimiento;
