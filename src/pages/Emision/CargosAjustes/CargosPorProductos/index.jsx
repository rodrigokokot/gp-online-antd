import { Button, Col } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import {
  cargosPorProductosSearch,
  columnsCargosPorProductos,
  dataCargosPorProductos,
} from "./mock";

const CargosPorProductos = () => {
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/cargosAjustes/cargosPorProductos/crear">
          <Button type="primary" size="small">
            Nuevo Cargo
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={cargosPorProductosSearch}
        title="Búsqueda de tipos de Cargos a Socios por producto"
      />
      <br />
      <Table
        data={dataCargosPorProductos}
        columns={columnsCargosPorProductos}
      />
    </>
  );
};

export default CargosPorProductos;
