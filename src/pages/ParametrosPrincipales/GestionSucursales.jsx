import Table from "../../components/organisms/Table/index";
import React from "react";
import SearchForm from "../../components/organisms/SearchForm/index";
import { GestionSucursalesSearch } from "../../Mocks/GestionSucursalesSearch";
import { Card } from "antd";
import {
  columnsGestionSucursales,
  dataGestionSucursales,
} from "../../Mocks/GestionSucursales";

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

      <Table
        columns={columnsGestionSucursales}
        data={dataGestionSucursales}
        expandible={true}
      />
    </div>
  );
}

export default GestionSucursales;
