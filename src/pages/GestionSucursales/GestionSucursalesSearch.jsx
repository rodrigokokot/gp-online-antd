import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { GestionSucursalesSearchMock } from "../../Mocks/GestionSucursalesSearchMock";
import { Card, Button, Col} from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
} from "../../Mocks/GestionSucursales";
import {Link} from "react-router-dom";


function GestionSucursales() {
  const [data, setData] = useState("");

  const handleCallback = (values) => {
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
            <Link to="/parametrosPrincipales/gestionSucursales/editarSucursal/new">
              <Button type="primary" size="small">
                Nueva Sucursal
              </Button>
            </Link>
          </Col>

          <SearchForm
            array={GestionSucursalesSearchMock}
            parentCallback={handleCallback}
            title="Busqueda de Sucursal"
          />


            <Table
              columns={columnsGestionSucursales}
              data={data}
              expandible={false}
              editable={true}
            />
        </>
  );
}

export default GestionSucursales;
