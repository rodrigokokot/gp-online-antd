import React, { useState } from "react";
import {
  CargoPorProductosAfinidadSearchArray,
  ColumnsCargosProductosAfinidad,
  dataCargosProductosAfinidad,
} from "./mock";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import { useTranslation } from "react-i18next";

export default function CargosPorProductosAfinidadSearch() { 
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCargosProductosAfinidad);
  }
  return (
    <div>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        {/* width ver tamaño en Mocks*/}
        <Link to="/emision/cargosAjustes/cargosPorProductosAfinidad/crearCargoPorProductoYAfinidad">
          <Button type="primary" size="large">
             {t("afinidad.button")}
          </Button>
        </Link>
      </Col>

      <SearchForm
        array={CargoPorProductosAfinidadSearchArray()}
        title={t("afinidad.search.searchtitle")}
        span={6}
        parentCallback={handleCallback}
      />
      <Table
        data={data}
        columns={ColumnsCargosProductosAfinidad()}
        expandible={false}
        editable={true}
      />
    </div>
  );
}
