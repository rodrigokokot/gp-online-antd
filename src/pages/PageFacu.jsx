import Table from "../components/organisms/Table/index";
import React from "react";
import { AdvancedSearchForm } from "../components/organisms/AdvancedSearchForm/index";
import { GestionSucursalesSearch } from "../searches/GestionSucursalesSearch";
import { Card } from "antd";
import {gestionSucursalesData, gestionSucursalesColumns} from "../Mocks/GestionSucursales";

function PageFacu() {
  
  return (
    <div>

      <Card style={{ marginTop: "15px", marginBottom: "15px" }}>
        <AdvancedSearchForm array={GestionSucursalesSearch()} />
      </Card>

      <Card style={{ marginTop: "50px", marginBottom: "50px" }}>

        <Table columns={gestionSucursalesColumns} data={gestionSucursalesData} expandible={false}  />
      </Card>
    </div>
  );
}

export default PageFacu;
