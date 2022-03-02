import { Button, Col } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  CargosPorProductosSearch,
  ColumnsCargosPorProductos,
  dataCargosPorProductos,
} from "./mock";

const CargosPorProductos = () => {
  const { t} = useTranslation();
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataCargosPorProductos);
  }
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/cargosAjustes/cargosPorProductos/crearCargoPorProducto">
          <Button type="primary" size="large">
            {t("cargosproductos.button")}
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={CargosPorProductosSearch()}
        title={t("cargosproductos.search.searchtitle")}
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table
        data={data}
        columns={ColumnsCargosPorProductos()}
      />
    </>
  );
};

export default CargosPorProductos;
