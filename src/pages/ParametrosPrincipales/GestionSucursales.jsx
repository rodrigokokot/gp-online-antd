import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { Button, Col } from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,GestionSucursalesSearchMock
} from "./mock";
import { Link } from "react-router-dom";

function GestionSucursales() {
  const [data, setData] = useState("");

  function handleCallback(values){
    if (
      Object.values(values).every((value) => {
        if (value === "" || value === undefined) {
          return true;
        }
      })
    ) {
      setData(dataGestionSucursales);
    } else {
      setData(
        dataGestionSucursales.filter((d) => {
          return (
            d.estado.toString() === values.estado.toString() ||
            d.descripcion.toString() === values.descripcion.toString() ||
            d.codigo.toString() === values.codigo.toString()
          );
        })
      );
    }
  };

  return (
        <>
          <Col style={{ textAlign: "right", marginBottom: "25px" }}>
            <Link to="/parametrosPrincipales/gestionSucursales/nuevo">
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

          <div style={{ marginTop: data.length == 0? '70px' : '8px' }}>
            <Table
              columns={columnsGestionSucursales}
              data={data}
              expandible={false}
              editable={true}
            />
          </div>
        </>
  );
}

export default GestionSucursales;
