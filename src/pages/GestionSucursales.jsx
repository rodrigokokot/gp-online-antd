import Table from "../components/organisms/Table/index";
import React from "react";
import SearchForm from "../components/organisms/SearchForm/index";
import { GestionSucursalesSearch } from "../Mocks/GestionSucursalesSearch";
import { Card } from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
} from "../Mocks/GestionSucursales";

function GestionSucursales() {
  return (
    <div>
      <Card style={{ marginTop: "15px", marginBottom: "15px" }}>
        <SearchForm array={GestionSucursalesSearch} />
      </Card>

      <Card style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Table
          columns={columnsGestionSucursales}
          data={dataGestionSucursales}
          expandible={false}
        />
      </Card>
    </div>
  );
}

export default GestionSucursales;
