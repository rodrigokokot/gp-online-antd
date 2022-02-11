import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { Button, Col } from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
  GestionSucursalesSearchMock,
} from "./mock";
import { Link } from "react-router-dom";

function GestionSucursales() {
  const [data, setData] = useState("");

  function handleCallback(values) {
    //lamada al servicio axios.post(values)
    //setData(axios.response)
    setData(dataGestionSucursales);
  }

  return (
    <>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/parametrosPrincipales/gestionDeSucursales/crearSucursal">
          <Button type="primary" size="small">
            Nueva Sucursal
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionSucursalesSearchMock}
        parentCallback={handleCallback}
        title="Busqueda de Sucursales"
        span={4}
      />
      <br />
      <Table
        columns={columnsGestionSucursales}
        data={data} //datafiltered
        expandible={false}
        editable={true}
      />
    </>
  );
}

export default GestionSucursales;
