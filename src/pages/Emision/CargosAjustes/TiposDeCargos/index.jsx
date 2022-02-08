import React from "react";
import {
  columnsTiposDeCargos,
  dataTiposDeCargos,
  tiposDeCargosSearch,
} from "./mock";
import { Button, Col } from "antd";
import { Link } from "react-router-dom";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";

function TiposDeCargos() {
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/cargosAjustes/tiposDeCargos/crear">
          <Button type="primary" size="small">
            Nuevo Tipo de Cargo
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={tiposDeCargosSearch}
        title="Búsqueda de tipos de Cargos"
      ></SearchForm>
      <br />
      <Table data={dataTiposDeCargos} columns={columnsTiposDeCargos}></Table>
    </>
  );
}

export default TiposDeCargos;
