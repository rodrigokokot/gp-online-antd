import Table from "../../components/organisms/Table/index";
import React, { useState } from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { GestionSucursalesSearch } from "../../Mocks/GestionSucursalesSearch";
import { Card, Button, Col, Switch, Form, Row, Modal} from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
} from "../../Mocks/GestionSucursales";
import { useHistory } from "react-router-dom";
import FloatInput from '../../components/molecules/FloatInput/index'
import FloatSelect from '../../components/molecules/FloatSelected/index'


function GestionSucursales() {
  const handleCallback = (values) => {
    console.log(`from parent: ${values}`);
  };

  return (
    <div>
      <SearchForm
        parentCallback={handleCallback}
        array={GestionSucursalesSearch}
      />

      <Card style={{ marginTop: "10px", marginBottom: "50px" }}>
        <Table
          columns={columnsGestionSucursales}
          data={dataGestionSucursales}
          expandible={true}
        />
      </Card>
    </div>
  );
}

export default GestionSucursales;
