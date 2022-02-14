import React, { useState } from "react";
import { Col, Button } from "antd";
import Table from "../../../components/organisms/Table";
import SearchForm from "../../../components/organisms/SearchForm";
import { Link } from "react-router-dom";
import {
  GestionPerfilesSearchMock,
  dataGestionPerfiles,
  columnsGestionPerfiles,
} from "./mock";

function GestionPerfiles() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionPerfiles);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/usuarios/gestionDePerfiles/nuevo">
          <Button type="primary" size="small">
            Nuevo Perfil
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionPerfilesSearchMock}
        parentCallback={handleCallback}
        title="Busqueda de Perfiles"
      />
      <br />
      <Table data={data} columns={columnsGestionPerfiles} />
    </>
  );
}

export default GestionPerfiles;
