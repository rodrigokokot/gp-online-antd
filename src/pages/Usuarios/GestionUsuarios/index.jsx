import React, { useState } from "react";
import SearchForm from "../../../components/organisms/SearchForm/index";
import Table from "../../../components/organisms/Table/index";
import { Link } from "react-router-dom";
import {
  GestionUsuariosSearch,
  dataGestionUsuarios,
  columnsGestionUsuarios,
} from "./mock";
import { Col, Button } from "antd";

function GestionUsuario() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionUsuarios);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/usuarios/gestionUsuarios/crear">
          <Button type="primary" size="small">
            Nuevo Usuario
          </Button>
        </Link>
      </Col>
      <SearchForm
        span={5}
        array={GestionUsuariosSearch}
        parentCallback={handleCallback}
        title="Busqueda de usuarios"
      />
      <br />
      <Table data={data} columns={columnsGestionUsuarios} />
    </>
  );
}

export default GestionUsuario;
