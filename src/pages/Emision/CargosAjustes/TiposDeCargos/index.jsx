import React, { useState } from "react";
import {
  ColumnsTiposDeCargos,
  dataTiposDeCargos,
  TiposDeCargosSearch,
} from "./mock";
import { Button, Col } from "antd";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { useTranslation } from "react-i18next";

function TiposDeCargos() {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataTiposDeCargos);
  }
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/cargosAjustes/tiposDeCargos/crearTipoDeCargo">
          <Button type="primary" size="large">
          {t("tiposcargos.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={TiposDeCargosSearch()}
        title={t("tiposcargos.search.searchtitle")}
        parentCallback={handleCallback}
        span={6}
      ></SearchForm>
      <br />
      <Table data={data} columns={ColumnsTiposDeCargos()}></Table>
    </>
  );
}

export default TiposDeCargos;
