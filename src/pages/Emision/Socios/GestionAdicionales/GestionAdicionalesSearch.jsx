import React from "react";
import SearchForm from "../../../../components/organisms/SearchForm";
import Table from "../../../../components/organisms/Table";
import { Link } from "react-router-dom";
import { Col, Button } from "antd";
import {dataGestionAdicionales,columnsGestionAdicionales,GestionAdicionalesSearchArray } from './mock'
export default function GestionAdicionalesSearch() {
  const handleCallback = (values) => {
    console.log(values);
  };


  return (
    <div>
      <Col style={{ textAlign: "right", marginBottom: "25px" }}>
        <Link to="/emision/socios/adicionales/nueva/new">
          <Button type="primary" size="small">
            Nuevo Adicional
          </Button>
        </Link>
      </Col>
      <SearchForm
        array={GestionAdicionalesSearchArray}
        title="Búsqueda de gestión de cuentas"
        span={4}
        parentCallback={handleCallback}
      />
      <Table
        columns={columnsGestionAdicionales}
        data={dataGestionAdicionales}
        expandible={false}
        editable={true}
      />
    </div>
  );
}
