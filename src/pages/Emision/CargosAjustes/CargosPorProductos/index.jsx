import { Button, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  cargosPorProductosSearch,
  columnsCargosPorProductos,
  dataCargosPorProductos,
} from "./mock";

const CargosPorProductos = () => {
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
          <Button type="primary" size="small">
            Nuevo Cargo
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={cargosPorProductosSearch}
        title="Búsqueda de tipos de Cargos a Socios por producto"
        parentCallback={handleCallback}
        span={6}
      />
      <br />
      <Table
        data={data}
        columns={columnsCargosPorProductos}
      />
    </>
  );
};

export default CargosPorProductos;
