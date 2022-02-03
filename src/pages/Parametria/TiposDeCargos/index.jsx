import React from "react";
import SearchForm from "../../../components/organisms/SearchForm";
import {
  columnsTiposDeCargos,
  dataTiposDeCargos,
  tiposDeCargosSearch,
} from "./mock";
import Table from "../../../components/organisms/Table";
import { Button, Col } from "antd";
import { Link } from "react-router-dom";

function TiposDeCargos() {
  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/parametria/tiposDeCargos/crear">
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
